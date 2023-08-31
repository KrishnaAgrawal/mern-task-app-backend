const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  patchTask,
} = require("../controllers/task-controller");

// Alternative 1
router.route("/").get(getTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .delete(deleteTask)
  .put(updateTask)
  .patch(patchTask);

// Alternative 2
// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);
// router.patch("/:id", patchTask);

module.exports = router;
