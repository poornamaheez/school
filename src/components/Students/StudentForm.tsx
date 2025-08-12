import React, { useState } from 'react';
import { Student } from '../../types';

interface StudentFormProps {
  student?: Student | null;
  onSave: (student: Omit<Student, 'id'>) => void;
  onCancel: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: student?.name || '',
    class: student?.class || '',
    section: student?.section || '',
    rollNumber: student?.rollNumber || '',
    email: student?.email || '',
    phone: student?.phone || '',
    address: student?.address || '',
    parentName: student?.parentName || '',
    parentPhone: student?.parentPhone || '',
    parentEmail: student?.parentEmail || '',
    admissionDate: student?.admissionDate || '',
    bloodGroup: student?.bloodGroup || '',
    dateOfBirth: student?.dateOfBirth || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-0">
            <i className="bi bi-person-plus me-2 text-primary"></i>
            {student ? 'Edit Student' : 'Add New Student'}
          </h2>
          <p className="text-muted mb-0">Fill in the student information below</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Class *</label>
                <select
                  className="form-select"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Section *</label>
                <select
                  className="form-select"
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Section</option>
                  {['A', 'B', 'C', 'D'].map(section => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">Roll Number *</label>
                <input
                  type="text"
                  className="form-control"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Blood Group</label>
                <select
                  className="form-select"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Admission Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="admissionDate"
                  value={formData.admissionDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <hr />
            <h5 className="mb-3">Parent/Guardian Information</h5>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Parent/Guardian Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Parent Phone *</label>
                <input
                  type="tel"
                  className="form-control"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Parent Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-flex gap-2 mt-4">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-lg me-2"></i>
                {student ? 'Update Student' : 'Add Student'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={onCancel}>
                <i className="bi bi-x-lg me-2"></i>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;