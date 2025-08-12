import React from 'react';
import { useAuth } from '../../context/AuthContext';

const StatsCards: React.FC = () => {
  const { currentRole } = useAuth();

  const getStatsForRole = () => {
    switch (currentRole) {
      case 'admin':
        return [
          { title: 'Total Students', value: '1,234', icon: 'bi-people', color: 'primary', change: '+5.2%' },
          { title: 'Total Teachers', value: '87', icon: 'bi-person-workspace', color: 'success', change: '+2.1%' },
          { title: 'Classes', value: '45', icon: 'bi-door-open', color: 'info', change: '0%' },
          { title: 'Revenue', value: '$125,430', icon: 'bi-currency-dollar', color: 'warning', change: '+12.5%' }
        ];
      case 'teacher':
        return [
          { title: 'My Students', value: '156', icon: 'bi-people', color: 'primary', change: '+2.3%' },
          { title: 'Classes Today', value: '6', icon: 'bi-calendar-check', color: 'success', change: '0%' },
          { title: 'Assignments', value: '23', icon: 'bi-journal-text', color: 'info', change: '+4.1%' },
          { title: 'Avg. Attendance', value: '92%', icon: 'bi-graph-up', color: 'warning', change: '+1.2%' }
        ];
      case 'student':
        return [
          { title: 'Attendance', value: '95%', icon: 'bi-calendar-check', color: 'success', change: '+2.1%' },
          { title: 'Assignments', value: '8', icon: 'bi-journal-text', color: 'primary', change: '-1' },
          { title: 'Average Grade', value: 'A-', icon: 'bi-award', color: 'info', change: '+0.2' },
          { title: 'Pending Fees', value: '$450', icon: 'bi-credit-card', color: 'warning', change: '0%' }
        ];
      case 'parent':
        return [
          { title: 'Child Attendance', value: '94%', icon: 'bi-calendar-check', color: 'success', change: '+1.5%' },
          { title: 'Assignments', value: '12', icon: 'bi-journal-text', color: 'primary', change: '+3' },
          { title: 'Average Grade', value: 'B+', icon: 'bi-award', color: 'info', change: '+0.1' },
          { title: 'Fee Balance', value: '$1,200', icon: 'bi-credit-card', color: 'warning', change: '-$300' }
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="row mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="card-subtitle mb-2 text-muted">{stat.title}</h6>
                  <h3 className="card-title mb-0 fw-bold">{stat.value}</h3>
                  <small className={`text-${stat.color}`}>
                    <i className="bi bi-arrow-up me-1"></i>
                    {stat.change} from last month
                  </small>
                </div>
                <div className={`bg-${stat.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
                     style={{ width: '50px', height: '50px' }}>
                  <i className={`${stat.icon} text-${stat.color} fs-4`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;