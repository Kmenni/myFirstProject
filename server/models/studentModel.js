const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  Id: { type: Number, required: true },
  FullName: { type: String, required: true },
  Email: { type: String, required: true },
  Faculty: { type: String, required: true },
  BirthDate: { type: Date, required: true },
  Exams: [
    {
      Name: { type: String, required: true },
      Date: { type: Date, required: true },
      Grade: { type: Number, required: true },
    },
  ]
});

module.exports = mongoose.model("student", studentSchema);
