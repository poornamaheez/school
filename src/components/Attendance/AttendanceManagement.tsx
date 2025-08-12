import React, { useState } from 'react';
import { mockAttendance } from '../../data/mockData';
import { AttendanceRecord } from '../../types';
import AttendanceTracker from './AttendanceTracker';
import AttendanceReports from './AttendanceReports';

const AttendanceManagement: React.FC = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>(mockAttendance);
  const [activeTab, setActiveTab] = useState<'tracker' | 'reports'>('tracker');

  const handleMarkAttendance = (records: AttendanceRecord[]) => {
    setAttendanceRecords([...attendanceRecords, ...records]);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-0">
            <i className="bi bi-calendar-check me-2 text-primary"></i>
            Attendance Management
          </h2>
          <p className="text-muted mb-0">Track and manage student attendance</p>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-white">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'tracker' ? 'active' : ''}`}
                onClick={() => setActiveTab('tracker')}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Mark Attendance
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`}
                onClick={() => setActiveTab('reports')}
              >
                <i className="bi bi-graph-up me-2"></i>
                Reports & Analytics
              </button>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {activeTab === 'tracker' && (
            <AttendanceTracker
              attendanceRecords={attendanceRecords}
              onMarkAttendance={handleMarkAttendance}
            />
          )}
          {activeTab === 'reports' && (
            <AttendanceReports attendanceRecords={attendanceRecords} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagement;