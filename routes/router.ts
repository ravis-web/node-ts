import { Router } from "express";

import { ToDo } from "../models/ToDo";

const router = Router();

let todoList: ToDo[] = [];

// GET request
router.get("/", (req, res, next) => {
  res.status(200).json({ todo: todoList });
});

// POST request
router.post("/todo", (req, res, next) => {
  const task: ToDo = { id: new Date().toISOString(), info: req.body.info };
  todoList.push(task);
  res.status(201).json({ msg: "task-added", todo: todoList });
});

// PUT request
router.put("/todo/:taskId", (req, res, next) => {
  const taskId = req.params.taskId;
  const taskIn = todoList.findIndex((task) => task.id === taskId);
  if (taskIn >= 0) {
    todoList[taskIn] = { id: todoList[taskIn].id, info: req.body.info };
    return res.status(200).json({ msg: "task-updated", todo: todoList });
  }
  res.status(404).json({ msg: "task-not-found" });
});

// DELETE request
router.delete("/todo/:taskId", (req, res, next) => {
  const taskId = req.params.taskId;
  todoList = todoList.filter((task) => task.id !== taskId);
  res.status(200).json({ msg: "task-updated", todo: todoList });
});

export default router;
