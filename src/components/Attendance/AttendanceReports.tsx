import React, { useState } from 'react';
import { AttendanceRecord } from '../../types';

interface AttendanceReportsProps {
  attendanceRecords: AttendanceRecord[];
}

const AttendanceReports: React.FC<AttendanceReportsProps> = ({ attendanceRecords }) => {
  const [filterClass, setFilterClass] = useState('');
  const [filterMonth, setFilterMonth] = useState(new Date().toISOString().slice(0, 7));

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesClass = !filterClass || record.class.includes(filterClass);
    const matchesMonth = record.date.startsWith(filterMonth);
    return matchesClass && matchesMonth;
  });

  const getAttendanceStats = () => {
    const total = filteredRecords.length;
    const present = filteredRecords.filter(r => r.status === 'Present').length;
    const absent = filteredRecords.filter(r => r.status === 'Absent').length;
    const late = filteredRecords.filter(r => r.status === 'Late').length;

    return {
      total,
      present,
      absent,
      late,
      presentPercentage: total > 0 ? ((present / total) * 100).toFixed(1) : '0',
      absentPercentage: total > 0 ? ((absent / total) * 100).toFixed(1) : '0',
      latePercentage: total > 0 ? ((late / total) * 100).toFixed(1) : '0'
    };
  };

  const getStudentAttendance = () => {
    const studentMap = new Map();
    
    filteredRecords.forEach(record => {
      if (!studentMap.has(record.studentId)) {
        studentMap.set(record.studentId, {
          name: record.studentName,
          class: record.class,
          present: 0,
          absent: 0,
          late: 0,
          total: 0
        });
      }
      
      const student = studentMap.get(record.studentId);
      student.total++;
      
      if (record.status === 'Present') student.present++;
      else if (record.status === 'Absent') student.absent++;
      else if (record.status === 'Late') student.late++;
    });
    
    return Array.from(studentMap.values()).map(student => ({
      ...student,
      percentage: student.total > 0 ? ((student.present / student.total) * 100).toFixed(1) : '0'
    }));
  };

  const stats = getAttendanceStats();
  const studentAttendance = getStudentAttendance();

  const uniqueClasses = [...new Set(attendanceRecords.map(r => r.class))];

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-4">
          <label className="form-label">Filter by Class</label>
          <select
            className="form-select"
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {uniqueClasses.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Filter by Month</label>
          <input
            type="month"
            className="form-control"
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-outline-primary w-100">
            <i className="bi bi-download me-2"></i>
            Export Report
          </button>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-primary bg-opacity-10 border-primary">
            <div className="card-body text-center">
              <h4 className="text-primary mb-0">{stats.total}</h4>
              <small className="text-primary">Total Records</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success bg-opacity-10 border-success">
            <div className="card-body text-center">
              <h4 className="text-success mb-0">{stats.presentPercentage}%</h4>
              <small className="text-success">Present Rate</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-danger bg-opacity-10 border-danger">
            <div className="card-body text-center">
              <h4 className="text-danger mb-0">{stats.absentPercentage}%</h4>
              <small className="text-danger">Absent Rate</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning bg-opacity-10 border-warning">
            <div className="card-body text-center">
              <h4 className="text-warning mb-0">{stats.latePercentage}%</h4>
              <small className="text-warning">Late Rate</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-white">
          <h6 className="card-title mb-0">Student-wise Attendance Summary</h6>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Late</th>
                  <th>Total Days</th>
                  <th>Attendance %</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {studentAttendance.map((student, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-person text-primary"></i>
                        </div>
                        {student.name}
                      </div>
                    </td>
                    <td>{student.class}</td>
                    <td>
                      <span className="badge bg-success">{student.present}</span>
                    </td>
                    <td>
                      <span className="badge bg-danger">{student.absent}</span>
                    </td>
                    <td>
                      <span className="badge bg-warning">{student.late}</span>
                    </td>
                    <td>{student.total}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="progress me-2" style={{ width: '60px', height: '8px' }}>
                          <div
                            className={`progress-bar ${
                              parseFloat(student.percentage) >= 90 ? 'bg-success' :
                              parseFloat(student.percentage) >= 75 ? 'bg-warning' : 'bg-danger'
                            }`}
                            style={{ width: `${student.percentage}%` }}
                          ></div>
                        </div>
                        <span className="fw-medium">{student.percentage}%</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                        parseFloat(student.percentage) >= 90 ? 'bg-success' :
                        parseFloat(student.percentage) >= 75 ? 'bg-warning' : 'bg-danger'
                      }`}>
                        {parseFloat(student.percentage) >= 90 ? 'Excellent' :
                         parseFloat(student.percentage) >= 75 ? 'Good' : 'Poor'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;