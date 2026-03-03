// import express from "express";
// const app = express();
// const port = "3000";

// app.get("/", (req, res) => {
//   res.send("Hello World!");
//   console.log("Response sent");
// });

// app.post("/", (req, res) => {
//   res.send("Post Done");
//   console.log("Response sent");
// });

// app.put("/", (req, res) => {
//   res.send("Put Done");
//   console.log("Response sent");
// });å

// app.delete("/", (req, res) => {
//   res.send("Delete Done");
//   console.log("Response sent");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

// =================Example 2 ===================

import express from "express";
import { Request, Response } from "express";

const server = express();
const port = 3000;

server.get("/movie/:type", (req: Request, res: Response) => {
  const query = req.query;
  const params = req.params;

  const secretToken = "token";
  // const type = params.type;

  // console.log(type);

  // const name = query.name;
  // const page = query.page;

  // console.log(page);

  // const params = req.params;

  const headers = req.headers;

  const token = headers.authorization;
  const headerToken = "token";
  if (headerToken === String(secretToken)) {
    res.status(200).end();
  } else {
    res.status(403).send({ message: "invalid token" });
  }

  console.log(token);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
