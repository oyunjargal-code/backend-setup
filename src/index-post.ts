import express from "express";
import { Request, Response } from "express";
import { request } from "node:http";

const server = express();
const port = 3000;

server.use(express.json());

// 🟢 Хялбар
// 1. /register зам үүсгэ. Body-гээс name, email-г авч доорх JSON буцаа:
// json{ "message": "Бүртгэл амжилттай!", "name": "...", "email": "..." }

// server.post("/register", (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   res
//     .status(200)
//     .json({ message: "Burtgel amjilttai", name: name, email: email });
// });

// 2. /login зам үүсгэ. Body-гээс username, password-г авч консолд хэвлэ. "Нэвтэрлээ!" гэж буцаа.

// server.post("/login", (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   res.status(200).send("Newterlee");
//   console.log(`Name: ${username}, Password: ${password}`);
// });

// 🟡 Дунд
// 3. /post зам үүсгэ. Body-гээс title, content-г авч JSON буцаа:
// json{ "id": 1, "title": "...", "content": "..." }

// server.post("/post", (req: Request, res: Response) => {
//   const { title, content } = req.body;

//   res.status(200).json({ id: 1, title, content });
// });

// 4. /order зам үүсгэ. Body-гээс product, quantity-г авч, quantity-г тоо болгоод нийт үнэ гарга (price = quantity * 1000):
// json{ "product": "...", "quantity": 2, "total": 2000 }

// server.post("/order", (req: Request, res: Response) => {
//   const product = req.body.product;
//   const quantity = Number(req.body.quantity);

//   const price = quantity * 1000;

//   res.status(200).json({ product, quantity, total: price });
// });

// 5-р бодлого руу орцгооё! 💪
// /transfer — Body-гээс from, to, amount-г авч, x-auth-token header байвал JSON буцаа, байхгүй бол "Зөвшөөрөлгүй!" буцаа.

server.post("/transfer", (req: Request, res: Response) => {
  const { from, to, amount } = req.body;

  const authToken = req.headers["x-auth-token"];

  if (authToken) {
    return res.status(200).json({ from, to, amount });
  } else {
    return res.status(401).send("Зөвшөөрөлгүй!");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
