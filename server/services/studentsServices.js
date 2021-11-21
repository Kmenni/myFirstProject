const Student = require("../models/studentModel");

// Get-All students
const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    Student.find({}, (error, students) => {
      if (error) {
        reject(error);
      } else {
        resolve(students);
      }
    });
  });
};

// Get Student by ID
const getStudentById = (id) => {
  return new Promise((resolve, reject) => {
    Student.findById(id, (error, student) => {
      if (error) {
        reject(error);
      } else {
        resolve(student);
      }
    });
  });
};

// post - create a new student
const addNewStudent = (newStudent) => {
  return new Promise((resolve, reject) => {
    const student = new Student(newStudent);
    student.save((error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Student added successfully");
      }
    });
  });
};

// Post  - create a new Exam
const addExam = (id, newExam) => {
  return new Promise(async (resolve, reject) => {
    const student = await getStudentById(id);
    student.Exams.push(newExam);
    Student.findByIdAndUpdate(id, student, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Exam added successfully");
      }
    });
  });
};

// Put - update an existing student
const updateStudent = (id, StudentToUpdate) => {
  return new Promise((resolve, reject) => {
    Student.findByIdAndUpdate(id, StudentToUpdate, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Student updated successfully");
      }
    });
  });
};

//  Put - update an existing Exam
const updateExam = (id, examId, examToUpdate) => {
  return new Promise(async (resolve, reject) => {
    const student = await getStudentById(id);
    const examIndex = student.Exams.findIndex((exam) => exam._id == examId);
    student.Exams[examIndex] = examToUpdate;
    Student.findByIdAndUpdate(id, student, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Exam updated successfully");
      }
    });
  });
};

// Delete
const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    Student.findByIdAndDelete(id, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Student deleted successfully");
      }
    });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  addNewStudent,
  updateStudent,
  addExam,
  updateExam,
  deleteStudent,
};
