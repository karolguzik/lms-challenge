import React, { useContext, useState } from 'react';
import { db } from '../firebase';
const StudentContext = React.createContext();

export const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showUpdateStudentForm, setShowUpdateStudentForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllStudents = () => {
    db.collection('students')
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  const getStudent = (id) => {
    return db.collection('students').get((id = id));
  };

  const addStudent = () => {};

  const updateStudent = (id) => {};

  const calcStudentsAverage = () => {
    return students
      ? students.reduce((sum, student) => {
          sum += student.score;
        }, 0)
      : 0;
  };

  const context = {
    students,
    student,
    getAllStudents,
    getStudent,
    addStudent,
    updateStudent,
    calcStudentsAverage,
    showAddStudentForm,
    showUpdateStudentForm,
  };

  return (
    <StudentContext.Provider value={context}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};
