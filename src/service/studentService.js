const {
  addStudent,
  listAllStudents,
  updateStudent,
  findStudentByName,
  findStudentByRegistration,
  findStudentByCourse,
  removeStudent,
} = require("../repository/studentRepository");

async function addStudentService(name, registration, course, year) {
  return await addStudent(name, registration, course, year);
}

async function listAllStudentsService() {
  return await listAllStudents();
}

async function updateStudentService(id, name, registration, course, year) {
  return await updateStudent(id, name, registration, course, year);
}

async function findStudentByNameService(name) {
  return await findStudentByName(name);
}

async function findStudentByRegistrationService(registration) {
  return await findStudentByRegistration(registration);
}

async function findStudentByCourseService(course) {
  return await findStudentByCourse(course);
}

async function removeStudentService(id) {
  return await removeStudent(id);
}

module.exports = {
  addStudentService,
  listAllStudentsService,
  updateStudentService,
  findStudentByNameService,
  findStudentByRegistrationService,
  findStudentByCourseService,
  removeStudentService,
};
