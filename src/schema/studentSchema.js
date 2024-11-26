const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  registration: {
    type: String,
    require: true,
  },

  course: {
    type: String,
    require: true,
  },

  year: {
    type: Number,
    require: true,
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
