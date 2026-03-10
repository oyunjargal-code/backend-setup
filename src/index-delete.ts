import express from "express";
import { Request, Response } from "express";
import { request } from "node:http";

const server = express();
const port = 3000;

server.use(express.json());

// Одоо DELETE руу орцгооё!
// DELETE бол хамгийн хялбар — body байхгүй, зөвхөн id-г params-аас авч устгасан гэж хариу буцаана:
// DELETE 1-р бодлого 🟢
// /user/:id зам үүсгэ. id-г авч доорх JSON буцаа:
// json{
//   "message": "Хэрэглэгч устгагдлаа!",
//   "id": "1"
// }

// server.delete("/user/:id", (req: Request, res: Response) => {
//   const id = req.params.id;

//   res.status(200).json({ message: "Хэрэглэгч устгагдлаа!", id });
// });

// DELETE 2-р бодлого 🟡
// /product/:id зам үүсгэ. id-г авч доорх JSON буцаа:
// json{
//   "message": "Бүтээгдэхүүн устгагдлаа!",
//   "id": "1"
// }

// server.delete("/product/:id", (req: Request, res: Response) => {
//   const id = req.params.id;

//   res.status(200).json({ message: "Бүтээгдэхүүн устгагдлаа!", id });
// });

// 3-р бодлого руу орцгооё! 💪

// DELETE 3-р бодлого 🔴
// /admin/user/:id зам үүсгэ. x-admin-token header байвал устгасан гэж JSON буцаа, байхгүй бол "Хандах эрхгүй!" буцаа:
// json{
//   "message": "Хэрэглэгч устгагдлаа!",
//   "id": "1"
// }

server.delete("/admin/user/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const adminToken = req.headers["x-admin-token"];

  if (adminToken) {
    return res.status(200).json({ message: "устгагдлаа!", id });
  } else {
    return res.status(401).send("Хандах эрхгүй!");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
