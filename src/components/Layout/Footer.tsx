import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light border-top mt-auto py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              © 2024 EduManage Pro. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-muted">
              Version 1.0.0 | Built with React & Bootstrap
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;