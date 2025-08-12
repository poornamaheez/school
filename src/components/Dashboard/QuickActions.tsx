import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '../../context/NavigationContext';

const QuickActions: React.FC = () => {
  const { currentRole } = useAuth();
  const { setActiveSection } = useNavigation();

  const getActionsForRole = () => {
    switch (currentRole) {
      case 'admin':
        return [
          { title: 'Add New Student', icon: 'bi-person-plus', action: () => setActiveSection('students'), color: 'primary' },
          { title: 'Generate Report', icon: 'bi-file-earmark-text', action: () => setActiveSection('reports'), color: 'success' },
          { title: 'Send Announcement', icon: 'bi-megaphone', action: () => setActiveSection('communication'), color: 'info' },
          { title: 'Manage Fees', icon: 'bi-credit-card', action: () => setActiveSection('fees'), color: 'warning' }
        ];
      case 'teacher':
        return [
          { title: 'Take Attendance', icon: 'bi-calendar-check', action: () => setActiveSection('attendance'), color: 'primary' },
          { title: 'Add Grades', icon: 'bi-award', action: () => setActiveSection('grades'), color: 'success' },
          { title: 'Upload Assignment', icon: 'bi-upload', action: () => setActiveSection('documents'), color: 'info' },
          { title: 'Message Parents', icon: 'bi-chat-dots', action: () => setActiveSection('communication'), color: 'warning' }
        ];
      case 'student':
        return [
          { title: 'View Assignments', icon: 'bi-journal-text', action: () => setActiveSection('documents'), color: 'primary' },
          { title: 'Check Grades', icon: 'bi-award', action: () => setActiveSection('grades'), color: 'success' },
          { title: 'View Timetable', icon: 'bi-calendar3', action: () => setActiveSection('timetable'), color: 'info' },
          { title: 'Message Teacher', icon: 'bi-chat-dots', action: () => setActiveSection('communication'), color: 'warning' }
        ];
      case 'parent':
        return [
          { title: 'View Attendance', icon: 'bi-calendar-check', action: () => setActiveSection('attendance'), color: 'primary' },
          { title: 'Check Grades', icon: 'bi-award', action: () => setActiveSection('grades'), color: 'success' },
          { title: 'Pay Fees', icon: 'bi-credit-card', action: () => setActiveSection('fees'), color: 'info' },
          { title: 'Contact Teacher', icon: 'bi-chat-dots', action: () => setActiveSection('communication'), color: 'warning' }
        ];
      default:
        return [];
    }
  };

  const actions = getActionsForRole();

  return (
    <div className="card h-100">
      <div className="card-header bg-white">
        <h5 className="card-title mb-0">
          <i className="bi bi-lightning me-2"></i>
          Quick Actions
        </h5>
      </div>
      <div className="card-body">
        <div className="d-grid gap-2">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`btn btn-outline-${action.color} d-flex align-items-center justify-content-start`}
              onClick={action.action}
            >
              <i className={`${action.icon} me-3`}></i>
              {action.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;