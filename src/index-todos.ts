import express from "express";
import { Request, Response } from "express";
import { todo } from "node:test";

let todos = [
  {
    id: 1,
    title: "Hello",
    isComplete: false,
  },
  {
    id: 2,
    title: "World",
    isComplete: false,
  },
];

const server = express();
const port = 3000;

server.use(express.json());

server.get("/todo", (_req: Request, res: Response) => {
  res.status(200).send(todos);
});

server.post("/todo", (req: Request, res: Response) => {
  const { title } = req.body;

  const newTodo = {
    id: 3,
    title,
    isComplete: false,
  };

  const updatedTodos = [...todos, newTodo];

  todos = updatedTodos;

  res.status(200).json(todos);
});

server.put("/todo/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const { title, isComplete } = req.body;

  const updatedTodos = todos.map((todo) => {
    if (String(todo.id) === id) {
      const updateTodos = {
        id: todo.id,
        title: title,
        isComplete: isComplete,
      };
      return updateTodos;
    } else {
      return todo;
    }
  });

  todos = updatedTodos;

  res.status(200).send(todos);
});

server.delete("/todo/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const foundedTodo = todos.find((todo) => String(todo.id) === id);

  if (!foundedTodo) {
    res.status(404).send({ message: "not found" });
    return;
  }

  const filteredTodos = todos.filter((todo) => String(todo.id) !== id);

  console.log(filteredTodos);

  res.status(200).send({ message: "successfully", todos });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
