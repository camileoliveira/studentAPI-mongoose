const express = require("express");
const router = express.Router();

const {
  addStudentHandler,
  listAllStudentsHandler,
  updateStudentHandler,
  findStudentHandler,
  removeStudentHandler,
} = require("../controller/studentController");

router.post("/student", addStudentHandler);
router.get("/student", listAllStudentsHandler);
router.get("/student/search", findStudentHandler);
router.put("/student/:id", updateStudentHandler);
router.delete("/student/:id",removeStudentHandler )



module.exports = router
