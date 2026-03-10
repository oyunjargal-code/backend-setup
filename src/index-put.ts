import express from "express";
import { Request, Response } from "express";
import { request } from "node:http";

const server = express();
const port = 3000;

server.use(express.json());

// PUT-ийн 1-р бодлого
// /user/:id зам үүсгэ. Body-гээс name, age-г авч доорх JSON буцаа:
// json{
//   "message": "Мэдээлэл шинэчлэгдлээ!",
//   "id": "1",
//   "name": "Bat",
//   "age": 20
// }
// Санамж: server.put(...) ашиглана 😊

// server.put("/user/:id", (req: Request, res: Response) => {
//   const id = req.params.id;
//   const { name, age } = req.body;

//   return res
//     .status(200)
//     .json({ message: "Мэдээлэл шинэчлэгдлээ!", id, name, age });
// });

// PUT 2-р бодлого 🟡
// /product/:id зам үүсгэ. Body-гээс title, price-г авч доорх JSON буцаа:
// json{
//   "message": "Бүтээгдэхүүн шинэчлэгдлээ!",
//   "id": "1",
//   "title": "Утас",
//   "price": 500000
// }

// server.put("/product/:id", (req: Request, res: Response) => {
//   const id = req.params.id;
//   const { title, price } = req.body;

//   return res
//     .status(200)
//     .json({ message: "Мэдээлэл шинэчлэгдлээ!", id, title, price });
// });

// 3-р бодлого руу орцгооё! 💪

// PUT 3-р бодлого 🔴
// /admin/user/:id зам үүсгэ. x-admin-token header байвал name, role-г өөрчлөөд JSON буцаа, байхгүй бол "Хандах эрхгүй!" буцаа:
// json{
//   "message": "Хэрэглэгч шинэчлэгдлээ!",
//   "id": "1",
//   "name": "Bat",
//   "role": "admin"
// }

server.put("/admin/user/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, role } = req.body;
  const adminToke = req.headers["x-admin-token"];

  if (adminToke) {
    return res
      .status(200)
      .json({ message: "Хэрэглэгч шинэчлэгдлээ!", id, name, role });
  } else {
    return res.status(401).send("Хандах эрхгүй!");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
