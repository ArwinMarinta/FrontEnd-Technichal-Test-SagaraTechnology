import { studentType } from "../types/student";
// import Students from "../data/student.json";

export const saveStudentsToLocalStorage = (Students: studentType[]) => {
  const studentsJSON = JSON.stringify(Students);
  localStorage.setItem("students", studentsJSON);
};

export const getStudentsFromLocalStorage = (): studentType[] => {
  const studentsJSON = localStorage.getItem("students");
  return studentsJSON ? JSON.parse(studentsJSON) : [];
};

export const deleteStudentFromLocalStorage = (id: number) => {
  const students = getStudentsFromLocalStorage();
  const updatedStudents = students.filter((student) => student.id !== id);
  saveStudentsToLocalStorage(updatedStudents);
};

export const addStudentToLocalStorage = (newStudent: studentType) => {
  const students = getStudentsFromLocalStorage();
  students.push(newStudent);
  saveStudentsToLocalStorage(students);
};

export const editStudentInLocalStorage = (updatedStudent: studentType) => {
  const students = getStudentsFromLocalStorage();
  const updatedStudents = students.map((student) =>
    student.id === updatedStudent.id ? updatedStudent : student
  );
  saveStudentsToLocalStorage(updatedStudents);
};
