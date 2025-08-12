import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthProvider } from './context/AuthContext';
import { NavigationProvider } from './context/NavigationContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import StudentManagement from './components/Students/StudentManagement';
import AttendanceManagement from './components/Attendance/AttendanceManagement';
import { useNavigation } from './context/NavigationContext';

const MainContent: React.FC = () => {
  const { activeSection } = useNavigation();

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
      case 'student-profiles':
      case 'academic-records':
      case 'parent-contacts':
        return <StudentManagement />;
      case 'attendance':
        return <AttendanceManagement />;
      case 'grades':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-award me-2 text-primary"></i>Grades & Assessment</h2>
            <p className="text-muted">Grade management system coming soon...</p>
          </div>
        );
      case 'fees':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-credit-card me-2 text-primary"></i>Fee Management</h2>
            <p className="text-muted">Fee management system coming soon...</p>
          </div>
        );
      case 'communication':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-chat-dots me-2 text-primary"></i>Communication Portal</h2>
            <p className="text-muted">Communication system coming soon...</p>
          </div>
        );
      case 'timetable':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-calendar3 me-2 text-primary"></i>Timetable & Scheduling</h2>
            <p className="text-muted">Timetable management coming soon...</p>
          </div>
        );
      case 'staff':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-person-workspace me-2 text-primary"></i>Staff Management</h2>
            <p className="text-muted">Staff management system coming soon...</p>
          </div>
        );
      case 'documents':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-folder me-2 text-primary"></i>Document Management</h2>
            <p className="text-muted">Document management system coming soon...</p>
          </div>
        );
      case 'reports':
        return (
          <div className="container-fluid py-4">
            <h2><i className="bi bi-graph-up me-2 text-primary"></i>Reports & Analytics</h2>
            <p className="text-muted">Analytics and reporting system coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex-grow-1 overflow-auto">
      {renderContent()}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <div className="d-flex flex-column min-vh-100 bg-light">
          <Header />
          <div className="d-flex flex-grow-1">
            <Sidebar />
            <MainContent />
          </div>
          <Footer />
        </div>
      </NavigationProvider>
    </AuthProvider>
  );
}

export default App;
