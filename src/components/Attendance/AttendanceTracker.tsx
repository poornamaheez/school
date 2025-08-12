import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { AttendanceRecord } from '../../types';

interface AttendanceTrackerProps {
  attendanceRecords: AttendanceRecord[];
  onMarkAttendance: (records: AttendanceRecord[]) => void;
}

const AttendanceTracker: React.FC<AttendanceTrackerProps> = ({
  attendanceRecords,
  onMarkAttendance
}) => {
  const [selectedClass, setSelectedClass] = useState('10');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, 'Present' | 'Absent' | 'Late'>>({});

  const filteredStudents = mockStudents.filter(
    student => student.class === selectedClass && student.section === selectedSection
  );

  const handleAttendanceChange = (studentId: string, status: 'Present' | 'Absent' | 'Late') => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSubmit = () => {
    const records: AttendanceRecord[] = filteredStudents.map(student => ({
      id: Date.now().toString() + student.id,
      studentId: student.id,
      studentName: student.name,
      class: `${student.class}${student.section}`,
      date: selectedDate,
      status: attendance[student.id] || 'Present'
    }));

    onMarkAttendance(records);
    setAttendance({});
    alert('Attendance marked successfully!');
  };

  const getAttendanceStats = () => {
    const total = filteredStudents.length;
    const present = Object.values(attendance).filter(status => status === 'Present').length;
    const absent = Object.values(attendance).filter(status => status === 'Absent').length;
    const late = Object.values(attendance).filter(status => status === 'Late').length;
    const unmarked = total - present - absent - late;

    return { total, present, absent, late, unmarked };
  };

  const stats = getAttendanceStats();

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label">Class</label>
          <select
            className="form-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Section</label>
          <select
            className="form-select"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            {['A', 'B', 'C', 'D'].map(section => (
              <option key={section} value={section}>{section}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="col-md-3 d-flex align-items-end">
          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit}
            disabled={filteredStudents.length === 0}
          >
            <i className="bi bi-check-lg me-2"></i>
            Mark Attendance
          </button>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card bg-success bg-opacity-10 border-success">
            <div className="card-body text-center">
              <h4 className="text-success mb-0">{stats.present}</h4>
              <small className="text-success">Present</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-danger bg-opacity-10 border-danger">
            <div className="card-body text-center">
              <h4 className="text-danger mb-0">{stats.absent}</h4>
              <small className="text-danger">Absent</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning bg-opacity-10 border-warning">
            <div className="card-body text-center">
              <h4 className="text-warning mb-0">{stats.late}</h4>
              <small className="text-warning">Late</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-secondary bg-opacity-10 border-secondary">
            <div className="card-body text-center">
              <h4 className="text-secondary mb-0">{stats.unmarked}</h4>
              <small className="text-secondary">Unmarked</small>
            </div>
          </div>
        </div>
      </div>

      {filteredStudents.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Roll No.</th>
                <th>Student Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <span className="badge bg-primary">{student.rollNumber}</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                           style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-person text-primary"></i>
                      </div>
                      {student.name}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${
                      attendance[student.id] === 'Present' ? 'bg-success' :
                      attendance[student.id] === 'Absent' ? 'bg-danger' :
                      attendance[student.id] === 'Late' ? 'bg-warning' :
                      'bg-secondary'
                    }`}>
                      {attendance[student.id] || 'Unmarked'}
                    </span>
                  </td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button
                        className={`btn ${attendance[student.id] === 'Present' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={() => handleAttendanceChange(student.id, 'Present')}
                      >
                        <i className="bi bi-check-lg"></i>
                      </button>
                      <button
                        className={`btn ${attendance[student.id] === 'Absent' ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={() => handleAttendanceChange(student.id, 'Absent')}
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                      <button
                        className={`btn ${attendance[student.id] === 'Late' ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => handleAttendanceChange(student.id, 'Late')}
                      >
                        <i className="bi bi-clock"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-people display-1 text-muted"></i>
          <h4 className="text-muted mt-3">No students found</h4>
          <p className="text-muted">Please select a different class or section.</p>
        </div>
      )}
    </div>
  );
};

export default AttendanceTracker;