import React, { useState } from 'react';
import { Student } from '../../types';

interface StudentListProps {
  students: Student[];
  onAddStudent: () => void;
  onEditStudent: (student: Student) => void;
  onDeleteStudent: (studentId: string) => void;
  onViewStudent: (student: Student) => void;
}

const StudentList: React.FC<StudentListProps> = ({
  students,
  onAddStudent,
  onEditStudent,
  onDeleteStudent,
  onViewStudent
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterClass, setFilterClass] = useState('');

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNumber.includes(searchTerm);
    const matchesClass = !filterClass || student.class === filterClass;
    return matchesSearch && matchesClass;
  });

  const uniqueClasses = [...new Set(students.map(s => s.class))];

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-0">
            <i className="bi bi-people me-2 text-primary"></i>
            Student Management
          </h2>
          <p className="text-muted mb-0">Manage student profiles and information</p>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={onAddStudent}>
            <i className="bi bi-person-plus me-2"></i>
            Add New Student
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or roll number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
              >
                <option value="">All Classes</option>
                {uniqueClasses.map(cls => (
                  <option key={cls} value={cls}>Class {cls}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3 text-end">
              <span className="text-muted">
                {filteredStudents.length} of {students.length} students
              </span>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Roll No.</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Parent Contact</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <span className="badge bg-primary">{student.rollNumber}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-person text-primary"></i>
                        </div>
                        <div>
                          <div className="fw-medium">{student.name}</div>
                          <small className="text-muted">{student.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>{student.class}</td>
                    <td>{student.section}</td>
                    <td>
                      <div>
                        <div className="fw-medium">{student.parentName}</div>
                        <small className="text-muted">{student.parentPhone}</small>
                      </div>
                    </td>
                    <td>{student.email}</td>
                    <td>
                      <div className="btn-group btn-group-sm">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => onViewStudent(student)}
                          title="View Profile"
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => onEditStudent(student)}
                          title="Edit"
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this student?')) {
                              onDeleteStudent(student.id);
                            }
                          }}
                          title="Delete"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;