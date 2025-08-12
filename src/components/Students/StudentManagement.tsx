import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { Student } from '../../types';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import StudentProfile from './StudentProfile';

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleSaveStudent = (studentData: Omit<Student, 'id'>) => {
    if (editingStudent) {
      setStudents(students.map(s => 
        s.id === editingStudent.id 
          ? { ...studentData, id: editingStudent.id }
          : s
      ));
    } else {
      const newStudent: Student = {
        ...studentData,
        id: Date.now().toString()
      };
      setStudents([...students, newStudent]);
    }
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleDeleteStudent = (studentId: string) => {
    setStudents(students.filter(s => s.id !== studentId));
    if (selectedStudent?.id === studentId) {
      setSelectedStudent(null);
    }
  };

  const handleViewStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  if (showForm) {
    return (
      <StudentForm
        student={editingStudent}
        onSave={handleSaveStudent}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  if (selectedStudent) {
    return (
      <StudentProfile
        student={selectedStudent}
        onBack={() => setSelectedStudent(null)}
        onEdit={() => handleEditStudent(selectedStudent)}
      />
    );
  }

  return (
    <StudentList
      students={students}
      onAddStudent={handleAddStudent}
      onEditStudent={handleEditStudent}
      onDeleteStudent={handleDeleteStudent}
      onViewStudent={handleViewStudent}
    />
  );
};

export default StudentManagement;