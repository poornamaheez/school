import React from 'react';
import { useAuth } from '../../context/AuthContext';
import StatsCards from './StatsCards';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';
import AttendanceChart from './AttendanceChart';
import PerformanceChart from './PerformanceChart';

const Dashboard: React.FC = () => {
  const { currentRole } = useAuth();

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-0">
            <i className="bi bi-speedometer2 me-2 text-primary"></i>
            Dashboard
          </h2>
          <p className="text-muted mb-0">Welcome back! Here's what's happening at your school.</p>
        </div>
      </div>

      <StatsCards />

      <div className="row mb-4">
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">
                <i className="bi bi-graph-up me-2"></i>
                Attendance Overview
              </h5>
            </div>
            <div className="card-body">
              <AttendanceChart />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <QuickActions />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">
                <i className="bi bi-award me-2"></i>
                Performance Analytics
              </h5>
            </div>
            <div className="card-body">
              <PerformanceChart />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;