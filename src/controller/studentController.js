const {
  addStudentService,
  listAllStudentsService,
  updateStudentService,
  findStudentByNameService,
  findStudentByRegistrationService,
  findStudentByCourseService,
  removeStudentService,
} = require("../service/studentService");

async function addStudentHandler(req, res) {
  const { name, registration, course, year } = req.body;
  const newStudent = await addStudentService(name, registration, course, year);
  return res.status(200).send(newStudent);
}

async function listAllStudentsHandler(req, res) {
  const students = await listAllStudentsService();
  return res.status(200).send(students);
}

async function updateStudentHandler(req, res) {
  const { id } = req.params;
  const { name, registration, course, year } = req.body;
  const updateStudent = await updateStudentService(
    id,
    name,
    registration,
    course,
    year
  );
  return res.status(200).send(updateStudent);
}

async function findStudentHandler(req, res) {
  const { name, registration, course } = req.query;

  if (name) {
    const nameStudent = await findStudentByNameService(name);
    return res.status(200).send(nameStudent);
  }

  if (registration) {
    const registrationStudent = await findStudentByRegistrationService(
      registration
    );
    return res.status(200).send(registrationStudent);
  }

  if (course) {
    const courseStudent = await findStudentByCourseService(course);
    return res.status(200).send(courseStudent);
  }
}

async function removeStudentHandler(req, res) {
  const { id } = req.params;
  const removeStudent = await removeStudentService(id);

  if (removeStudent) {
    return res.status(200).send("Student removed");
  }
  return res.status(404).send("Student not found");
}

module.exports = {
  addStudentHandler,
  listAllStudentsHandler,
  updateStudentHandler,
  findStudentHandler,
  removeStudentHandler
};
