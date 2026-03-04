import express from "express";
import { Request, Response } from "express";
import { todo } from "node:test";

const server = express();
const port = 3000;

server.use(express.json());

// 1-р даалгавар: Params (Замын хувьсагч)
// Тайлбар: URL-ийн зам доторх хувьсагчийг :variableName ашиглан тодорхойлдог.
// Даалгавар: /student/:name зам үүсгэж, URL дээр бичигдсэн нэрийг дэлгэцэнд "Сайн байна уу, [нэр]!" гэж харуул.
// Турших URL: http://localhost:3000/student/bat

// server.get("/student/:name", (req: Request, res: Response) => {
//   res.status(200).send(`sain bna uu? ${req.params.name}`);

//   console.log("okey");
// });

// 2-р даалгавар: Query (Хайлтын мөр)
// Тайлбар: URL-ийн ард ? тэмдгээр зааглагдаж ирдэг нэмэлт өгөгдөл.
// Даалгавар: /filter зам үүсгэж, city болон age гэсэн query-г уншиж аваад JSON хэлбэрээр буцаа.
// Турших URL: http://localhost:3000/filter?city=Ulaanbaatar&age=20

// server.get("/filter", (req: Request, res: Response) => {
//   const { city, age } = req.query;
//   res.status(200).json({ city: city, age: age });

//   console.log("okey");
// });

// 3-р даалгавар: Headers (Толгой мэдээлэл)
// Тайлбар: Хэрэглэгчийн харагдах орчинд биш, хүсэлтийн далд мета өгөгдөлд байдаг мэдээлэл.
// Даалгавар: Хүсэлтийн header-ээс user-agent (хөтөч) болон auth-token гэсэн мэдээллийг авч консол дээр хэвлэ.
// Турших хэрэгсэл: Postman эсвэл Hoppscotch ашиглан Header хэсэгт утга өгч шалгана.

server.get("/headers", (req: Request, res: Response) => {
  res.status(200).send("ok");

  console.log("okey");
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
