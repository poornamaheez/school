import { Student, Teacher, AttendanceRecord, Grade, Fee, Message, TimeSlot } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    class: '10',
    section: 'A',
    rollNumber: '001',
    email: 'alice@email.com',
    phone: '+1234567890',
    address: '123 Main St, City',
    parentName: 'Robert Johnson',
    parentPhone: '+1234567891',
    parentEmail: 'robert@email.com',
    admissionDate: '2023-04-15',
    bloodGroup: 'A+',
    dateOfBirth: '2008-05-20'
  },
  {
    id: '2',
    name: 'Bob Smith',
    class: '10',
    section: 'A',
    rollNumber: '002',
    email: 'bob@email.com',
    phone: '+1234567892',
    address: '456 Oak Ave, City',
    parentName: 'Mary Smith',
    parentPhone: '+1234567893',
    parentEmail: 'mary@email.com',
    admissionDate: '2023-04-16',
    bloodGroup: 'B+',
    dateOfBirth: '2008-03-15'
  },
  {
    id: '3',
    name: 'Carol Davis',
    class: '9',
    section: 'B',
    rollNumber: '003',
    email: 'carol@email.com',
    phone: '+1234567894',
    address: '789 Pine St, City',
    parentName: 'David Davis',
    parentPhone: '+1234567895',
    parentEmail: 'david@email.com',
    admissionDate: '2023-04-17',
    bloodGroup: 'O+',
    dateOfBirth: '2009-07-10'
  }
];

export const mockTeachers: Teacher[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    email: 'sarah@school.edu',
    phone: '+1234567896',
    subject: 'Mathematics',
    classes: ['10A', '10B', '9A'],
    joiningDate: '2020-08-15',
    qualification: 'Ph.D. in Mathematics',
    experience: '8 years'
  },
  {
    id: '2',
    name: 'Mr. James Brown',
    email: 'james@school.edu',
    phone: '+1234567897',
    subject: 'Physics',
    classes: ['10A', '9B'],
    joiningDate: '2019-07-20',
    qualification: 'M.Sc. Physics',
    experience: '6 years'
  },
  {
    id: '3',
    name: 'Ms. Emily Chen',
    email: 'emily@school.edu',
    phone: '+1234567898',
    subject: 'English',
    classes: ['10A', '10B', '9A', '9B'],
    joiningDate: '2021-06-10',
    qualification: 'M.A. English Literature',
    experience: '4 years'
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Alice Johnson',
    class: '10A',
    date: '2024-01-15',
    status: 'Present'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Bob Smith',
    class: '10A',
    date: '2024-01-15',
    status: 'Absent'
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Carol Davis',
    class: '9B',
    date: '2024-01-15',
    status: 'Late'
  }
];

export const mockGrades: Grade[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Alice Johnson',
    subject: 'Mathematics',
    examType: 'Mid-term',
    marks: 85,
    totalMarks: 100,
    grade: 'A',
    date: '2024-01-10'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Bob Smith',
    subject: 'Physics',
    examType: 'Mid-term',
    marks: 78,
    totalMarks: 100,
    grade: 'B+',
    date: '2024-01-10'
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Carol Davis',
    subject: 'English',
    examType: 'Quiz',
    marks: 92,
    totalMarks: 100,
    grade: 'A+',
    date: '2024-01-12'
  }
];

export const mockFees: Fee[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Alice Johnson',
    class: '10A',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2024-01-31',
    status: 'Paid',
    paymentDate: '2024-01-15',
    paymentMode: 'Online'
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Bob Smith',
    class: '10A',
    feeType: 'Tuition Fee',
    amount: 5000,
    dueDate: '2024-01-31',
    status: 'Pending'
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Carol Davis',
    class: '9B',
    feeType: 'Library Fee',
    amount: 500,
    dueDate: '2024-01-20',
    status: 'Overdue'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    from: 'Principal',
    to: 'All Parents',
    subject: 'Parent-Teacher Meeting',
    content: 'Dear Parents, We are organizing a parent-teacher meeting on January 25th, 2024.',
    date: '2024-01-10',
    read: false,
    type: 'announcement'
  },
  {
    id: '2',
    from: 'Math Teacher',
    to: 'Parent of Alice Johnson',
    subject: 'Excellent Performance',
    content: 'Alice has shown excellent performance in mathematics this semester.',
    date: '2024-01-12',
    read: true,
    type: 'notification'
  },
  {
    id: '3',
    from: 'Parent of Bob Smith',
    to: 'Class Teacher',
    subject: 'Absence Notification',
    content: 'Bob will be absent tomorrow due to a medical appointment.',
    date: '2024-01-14',
    read: false,
    type: 'query'
  }
];

export const mockTimetable: TimeSlot[] = [
  {
    id: '1',
    class: '10',
    section: 'A',
    subject: 'Mathematics',
    teacher: 'Dr. Sarah Wilson',
    room: 'Room 101',
    day: 'Monday',
    startTime: '09:00',
    endTime: '10:00'
  },
  {
    id: '2',
    class: '10',
    section: 'A',
    subject: 'Physics',
    teacher: 'Mr. James Brown',
    room: 'Lab 1',
    day: 'Monday',
    startTime: '10:00',
    endTime: '11:00'
  },
  {
    id: '3',
    class: '10',
    section: 'A',
    subject: 'English',
    teacher: 'Ms. Emily Chen',
    room: 'Room 102',
    day: 'Monday',
    startTime: '11:30',
    endTime: '12:30'
  }
];