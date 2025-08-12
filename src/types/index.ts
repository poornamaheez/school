export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  rollNumber: string;
  email: string;
  phone: string;
  address: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  admissionDate: string;
  bloodGroup: string;
  dateOfBirth: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  classes: string[];
  joiningDate: string;
  qualification: string;
  experience: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

export interface Grade {
  id: string;
  studentId: string;
  studentName: string;
  subject: string;
  examType: string;
  marks: number;
  totalMarks: number;
  grade: string;
  date: string;
}

export interface Fee {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  feeType: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  paymentDate?: string;
  paymentMode?: string;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  date: string;
  read: boolean;
  type: 'announcement' | 'query' | 'notification';
}

export interface TimeSlot {
  id: string;
  class: string;
  section: string;
  subject: string;
  teacher: string;
  room: string;
  day: string;
  startTime: string;
  endTime: string;
}

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}