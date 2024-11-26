const Student = require("../schema/studentSchema");

async function addStudent(name, registration, course, year) {
  try {
    const newStudent = new Student({ name, registration, course, year });
    return await newStudent.save();
  } catch (error) {
    console.log(err.message);
  }
}

async function listAllStudents() {
  try {
    return await Student.find();
  } catch (error) {
    console.log(err.message);
  }
}

async function updateStudent(id, name, registration, course, year) {
  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { name, registration, course, year },
      { new: true, runValidators: true }
    );
    return student;
  } catch (error) {
    console.log(err.message);
  }
}

async function findStudentByName(name) {
  try {
    const student = await Student.findOne({ name });
    if (student) {
      return student;
    } else {
      console.log("Student not found");
    }
  } catch (error) {
    console.log(err.message);
  }
}

async function findStudentByRegistration(registration) {
  try {
    const student = await Student.findOne({ registration });
    if (student) {
      return student;
    } else {
      console.log("Student not found");
    }
  } catch (error) {
    console.log(err.message);
  }
}

async function findStudentByCourse(course) {
  try {
    const student = await Student.findOne({ course });
    if (student) {
      return student;
    } else {
      console.log("Student not found");
    }
  } catch (error) {
    console.log(err.message);
  }
}

async function removeStudent(id) {
  try {
    return await Student.findByIdAndDelete(id);
  } catch (error) {
    console.log(err.message);
  }
}

module.exports = {
  addStudent,
  listAllStudents,
  updateStudent,
  findStudentByName,
  findStudentByRegistration,
  findStudentByCourse,
  removeStudent
};
