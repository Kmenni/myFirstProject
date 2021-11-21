const express = require("express");
const studentsService = require("../services/studentsServices");

const router = express.Router();

// Entry Point: 'http://localhost:8000/students'

// Get All students request by a GET request
router.route("/").get(async (request, response) => {
  try {
    const students = await studentsService.getAllStudents();
    return response.json(students);
  } catch (error) {
    return response.json("Error - getAllStudents did not succeed");
  }
});

// Get student by ID request by a GET request
router.route("/:id").get(async (request, response) => {
  try {
    const id = request.params.id;
    const student = await studentsService.getStudentById(id);
    response.json(student);
  } catch (error) {
    return response.json("Error - getStudentById did not succeed");
  }
});

// Create new student using a POST request
router.route("/").post(async (request, response) => {
  try {
    const student = request.body;
    const result = await studentsService.addNewStudent(student);
    return response.json(result);
  } catch (error) {
    return response.json("Error - addNewStudent did not succeed");
  }
});

// Create new exam using a POST request
router.route("/:id").post(async (request, response) => {
  try {
    const exam = request.body;
    const result = await studentsService.addExam(request.params.id, exam);
    return response.json(result);
  } catch (error) {
    return response.json("Error - addNewExam did not succeed");
  }
});

// update an existing student using a PUT request
router.route("/:id").put(async (request, response) => {
  try {
    const id = request.params.id;
    const student = request.body;
    const result = await studentsService.updateStudent(id, student);
    return response.json(result);
  } catch (error) {
    return response.json("Error - updateStudent did not succeed");
  }
});

// update an existing exam using a PUT request
router.route("/:id/:examId").put(async (request, response) => {
  try {
    const id = request.params.id;
    const examId = request.params.examId;
    const exam = request.body;
    const result = await studentsService.updateExam(id, examId, exam);
    return response.json(result);
  } catch (error) {
    return response.json("Error - updateStudent did not succeed");
  }
});

// Delete a use by using a DELETE request
router.route("/:id").delete(async (request, response) => {
  try {
    const id = request.params.id;
    const result = await studentsService.deleteStudent(id);
    return response.json(result);
  } catch (error) {
    return response.json("Error - deleteStudent did not succeed");
  }
});

module.exports = router;
