import {
  addTodo,
  updateTodo,
  getTodo,
  deleteTodo,
} from "../services/todo.service.js";
//const todoService=require('../services/totdo.service')
export const addTodoHandler = async (req, res) => {
  try {
    console.log("bb", req.body);
    if (req.body.title != "" && req.body.description != "") {
      const addTodoRes = await addTodo(req.body.title, req.body.description);
      if (addTodoRes.status) {
        res.status(200).send({ ...addTodoRes });
      } else {
        res.status(400).send({ ...addTodoRes });
      }
    } else {
      res.status(400).send("Error in add todo.");
    }
  } catch (error) {
    console.log("Errr", error);
    res.status(500).send("Internal server error.");
  }
};
export const updateTodoHandler = async (req, res) => {
  try {
    if (
      req.body.title != "" &&
      req.body.description != "" &&
      req.body.id != ""
    ) {
      const updateTodoRes = await updateTodo(
        req.body.id,
        req.body.title,
        req.body.description
      );
      if (updateTodoRes.status) {
        res.status(200).send({ ...updateTodoRes });
      } else {
        res.status(400).send({ ...updateTodoRes });
      }
    } else {
      res.status(400).send("Error in update todo.");
    }
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};
export const getAllTodoHandler = async (req, res) => {
  try {
    const allTodoRes = await getTodo();
    if (allTodoRes.status) {
      res.status(200).send({ ...allTodoRes });
    } else {
      res.status(400).send({ ...allTodoRes });
    }
  } catch (error) {
    xonsole.log("Errr", error);
    res.status(500).send("Internal server error.");
  }
};
export const deleteTodoHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodoRes = await deleteTodo(id);
    if (deleteTodoRes.status) {
      res.status(200).send({ ...deleteTodoRes });
    } else {
      res.status(400).send({ ...deleteTodoRes });
    }
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
};
