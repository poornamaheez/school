import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '../../context/NavigationContext';

const Header: React.FC = () => {
  const { user, currentRole, setCurrentRole } = useAuth();
  const { setSidebarOpen } = useNavigation();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentRole(e.target.value as any);
  };

  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          <div className="col-md-6 d-flex align-items-center">
            <button
              className="btn btn-link d-md-none me-3 p-0"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="bi bi-list fs-4"></i>
            </button>
            <div className="d-flex align-items-center">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                   style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-mortarboard text-white"></i>
              </div>
              <div>
                <h4 className="mb-0 text-primary fw-bold">EduManage Pro</h4>
                <small className="text-muted">School Management System</small>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-end">
              <div className="me-3">
                <select
                  className="form-select form-select-sm"
                  value={currentRole}
                  onChange={handleRoleChange}
                >
                  <option value="admin">Admin View</option>
                  <option value="teacher">Teacher View</option>
                  <option value="student">Student View</option>
                  <option value="parent">Parent View</option>
                </select>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle me-2"></i>
                  {user?.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Profile</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;