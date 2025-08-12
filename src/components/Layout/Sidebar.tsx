import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigation } from '../../context/NavigationContext';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  roles: string[];
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'bi-speedometer2',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'students',
    label: 'Student Management',
    icon: 'bi-people',
    roles: ['admin', 'teacher'],
    subItems: [
      { id: 'student-profiles', label: 'Student Profiles', icon: 'bi-person-badge', roles: ['admin', 'teacher'] },
      { id: 'academic-records', label: 'Academic Records', icon: 'bi-journal-text', roles: ['admin', 'teacher'] },
      { id: 'parent-contacts', label: 'Parent Contacts', icon: 'bi-telephone', roles: ['admin', 'teacher'] }
    ]
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: 'bi-calendar-check',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'grades',
    label: 'Grades & Assessment',
    icon: 'bi-award',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'fees',
    label: 'Fee Management',
    icon: 'bi-credit-card',
    roles: ['admin', 'parent']
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: 'bi-chat-dots',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'timetable',
    label: 'Timetable',
    icon: 'bi-calendar3',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'staff',
    label: 'Staff Management',
    icon: 'bi-person-workspace',
    roles: ['admin']
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: 'bi-folder',
    roles: ['admin', 'teacher', 'student', 'parent']
  },
  {
    id: 'reports',
    label: 'Reports & Analytics',
    icon: 'bi-graph-up',
    roles: ['admin', 'teacher']
  }
];

const Sidebar: React.FC = () => {
  const { currentRole } = useAuth();
  const { activeSection, setActiveSection, sidebarOpen, setSidebarOpen } = useNavigation();

  const filteredMenuItems = menuItems.filter(item => item.roles.includes(currentRole));

  const handleMenuClick = (itemId: string) => {
    setActiveSection(itemId);
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className={`bg-white border-end position-fixed position-md-sticky top-0 h-100 ${sidebarOpen ? 'start-0' : 'start-n100'} d-md-block`}
           style={{ width: '280px', zIndex: 1050, transition: 'all 0.3s ease' }}>
        <div className="p-3 border-bottom d-md-none">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 text-primary fw-bold">Menu</h5>
            <button
              className="btn btn-link p-0"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <nav className="p-3">
          <ul className="nav nav-pills flex-column">
            {filteredMenuItems.map((item) => (
              <li key={item.id} className="nav-item mb-1">
                <button
                  className={`nav-link w-100 text-start d-flex align-items-center ${
                    activeSection === item.id ? 'active' : 'text-dark'
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <i className={`${item.icon} me-3`}></i>
                  {item.label}
                </button>
                {item.subItems && activeSection === item.id && (
                  <ul className="nav nav-pills flex-column ms-4 mt-2">
                    {item.subItems
                      .filter(subItem => subItem.roles.includes(currentRole))
                      .map((subItem) => (
                        <li key={subItem.id} className="nav-item mb-1">
                          <button
                            className="nav-link w-100 text-start d-flex align-items-center text-muted"
                            onClick={() => handleMenuClick(subItem.id)}
                          >
                            <i className={`${subItem.icon} me-3`}></i>
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;