import { Router } from "express";

import { ToDo } from "../models/ToDo";

const router = Router();

let todoList: ToDo[] = [];

type reqBody = { info: string };
type reqParam = { taskId: string };

// GET request
router.get("/", (req, res, next) => {
  res.status(200).json({ todo: todoList });
});

// POST request
router.post("/todo", (req, res, next) => {
  const body = req.body as reqBody;
  const task: ToDo = { id: new Date().toISOString(), info: body.info };
  todoList.push(task);
  res.status(201).json({ msg: "task-added", todo: todoList });
});

// PUT request
router.put("/todo/:taskId", (req, res, next) => {
  const params = req.params as reqParam;
  const body = req.body as reqBody;
  const taskIn = todoList.findIndex((task) => task.id === params.taskId);
  if (taskIn >= 0) {
    todoList[taskIn] = { id: todoList[taskIn].id, info: body.info };
    return res.status(200).json({ msg: "task-updated", todo: todoList });
  }
  res.status(404).json({ msg: "task-not-found" });
});

// DELETE request
router.delete("/todo/:taskId", (req, res, next) => {
  const params = req.params as reqParam;
  todoList = todoList.filter((task) => task.id !== params.taskId);
  res.status(200).json({ msg: "task-updated", todo: todoList });
});

export default router;
