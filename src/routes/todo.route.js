import express from "express";
const router = express.Router();
import {
  addTodoHandler,
  updateTodoHandler,
  getAllTodoHandler,
  deleteTodoHandler,
} from "../controllers/todo.controller.js";
//const todoController = require("../controllers/todo.controller");
/** get all todo */
router.get("/", getAllTodoHandler);
/** Add todo router */
router.post("/add", addTodoHandler);
/** update */
router.patch("/update", updateTodoHandler);
/** delete todo */
router.delete("/:id", deleteTodoHandler);

export default router;
