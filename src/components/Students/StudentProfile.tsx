import React from 'react';
import { Student } from '../../types';

interface StudentProfileProps {
  student: Student;
  onBack: () => void;
  onEdit: () => void;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student, onBack, onEdit }) => {
  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <div className="d-flex align-items-center mb-2">
            <button className="btn btn-outline-secondary me-3" onClick={onBack}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <h2 className="mb-0">
              <i className="bi bi-person me-2 text-primary"></i>
              Student Profile
            </h2>
          </div>
          <p className="text-muted mb-0">Detailed information about {student.name}</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={onEdit}>
            <i className="bi bi-pencil me-2"></i>
            Edit Profile
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body text-center">
              <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                   style={{ width: '100px', height: '100px' }}>
                <i className="bi bi-person text-primary" style={{ fontSize: '3rem' }}></i>
              </div>
              <h4 className="card-title">{student.name}</h4>
              <p className="text-muted">Class {student.class}{student.section} • Roll No. {student.rollNumber}</p>
              <div className="d-flex justify-content-center gap-2">
                <span className="badge bg-primary">Active</span>
                <span className="badge bg-success">Regular</span>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h6 className="card-title mb-0">Quick Stats</h6>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-6">
                  <div className="border-end">
                    <h4 className="text-success mb-0">95%</h4>
                    <small className="text-muted">Attendance</small>
                  </div>
                </div>
                <div className="col-6">
                  <h4 className="text-primary mb-0">A-</h4>
                  <small className="text-muted">Avg. Grade</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h6 className="card-title mb-0">Personal Information</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label text-muted">Full Name</label>
                  <p className="fw-medium">{student.name}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Class</label>
                  <p className="fw-medium">{student.class}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Section</label>
                  <p className="fw-medium">{student.section}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Roll Number</label>
                  <p className="fw-medium">{student.rollNumber}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Date of Birth</label>
                  <p className="fw-medium">{student.dateOfBirth || 'Not provided'}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Blood Group</label>
                  <p className="fw-medium">{student.bloodGroup || 'Not provided'}</p>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label text-muted">Admission Date</label>
                  <p className="fw-medium">{student.admissionDate || 'Not provided'}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label text-muted">Email</label>
                  <p className="fw-medium">{student.email || 'Not provided'}</p>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label text-muted">Phone</label>
                  <p className="fw-medium">{student.phone || 'Not provided'}</p>
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label text-muted">Address</label>
                  <p className="fw-medium">{student.address || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h6 className="card-title mb-0">Parent/Guardian Information</h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label text-muted">Name</label>
                  <p className="fw-medium">{student.parentName}</p>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label text-muted">Phone</label>
                  <p className="fw-medium">{student.parentPhone}</p>
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label text-muted">Email</label>
                  <p className="fw-medium">{student.parentEmail || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;