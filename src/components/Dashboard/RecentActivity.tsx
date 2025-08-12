import React from 'react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'attendance',
      message: 'Attendance marked for Class 10A',
      time: '2 hours ago',
      icon: 'bi-calendar-check',
      color: 'success'
    },
    {
      id: 2,
      type: 'grade',
      message: 'New grades added for Mathematics',
      time: '4 hours ago',
      icon: 'bi-award',
      color: 'primary'
    },
    {
      id: 3,
      type: 'fee',
      message: 'Fee payment received from Alice Johnson',
      time: '6 hours ago',
      icon: 'bi-credit-card',
      color: 'info'
    },
    {
      id: 4,
      type: 'message',
      message: 'New message from parent',
      time: '8 hours ago',
      icon: 'bi-chat-dots',
      color: 'warning'
    },
    {
      id: 5,
      type: 'document',
      message: 'Assignment uploaded for Physics',
      time: '1 day ago',
      icon: 'bi-file-earmark',
      color: 'secondary'
    }
  ];

  return (
    <div className="card h-100">
      <div className="card-header bg-white">
        <h5 className="card-title mb-0">
          <i className="bi bi-clock-history me-2"></i>
          Recent Activity
        </h5>
      </div>
      <div className="card-body">
        <div className="timeline">
          {activities.map((activity) => (
            <div key={activity.id} className="d-flex mb-3">
              <div className={`bg-${activity.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3`}
                   style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                <i className={`${activity.icon} text-${activity.color}`}></i>
              </div>
              <div className="flex-grow-1">
                <p className="mb-1 fw-medium">{activity.message}</p>
                <small className="text-muted">{activity.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer bg-white">
        <button className="btn btn-outline-primary btn-sm w-100">
          View All Activities
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;