import express from "express";
import { Request, Response } from "express";
import { request } from "node:http";

const server = express();
const port = 3000;

server.use(express.json());

// Анхны бодлого
// /register зам үүсгэ. Body-гээс name болон age-г авч консолд хэвлэ.
// Санамж:
// typescriptreq.body.name
// req.body.age
// Postman дээр Body → raw → JSON дээр:
// json{
//   "name": "Bat",
//   "age": 20
// }
// Оролдоод үзээрэй! 💪

// server.post("/register", (req: Request, res: Response) => {
//   const { name, age } = req.body;

//   return res.status(200).json({ message: "successes", name, age });
// });

// 🟢 Хялбар
// 1. /hello зам үүсгэ. "Сайн байна уу!" гэж буцаа.

// server.get("/hello", (req: Request, res: Response) => {
//   res.status(200).send("sain bna uu?");
//   console.log("sain bna uu?");
// });

// 2. /user/:name зам үүсгэ. URL дээрх нэрийг уншаад "Тавтай морил, [нэр]!" гэж буцаа.

// server.get("/user/:name", (req: Request, res: Response) => {
//   const name = req.params.name;

//   res.status(200).send(`Tawtai moril ${name}`);
// });

// 3. /search?keyword=cat зам үүсгэ. keyword-г уншаад "Та [keyword]-г хайлаа" гэж буцаа.

// server.get("/search", (req: Request, res: Response) => {
//   const keyword = req.query.keyword;
//   res.status(200).send(`Ta ${keyword}-g hailaa`);
//   console.log(`Ta ${keyword}-g hailaa`);
// });

// 4-р бодлого руу орцгооё! 💪
// /product/:id зам үүсгэ. id-г уншаад JSON хэлбэрээр буцаа:
// json{ "productId": "123" }

// server.get("/product/:id", (req: Request, res: Response) => {
//   const id = req.params.id;
//   res.status(200).json({ productId: id });
// });

// 5-р бодлого! 💪
// /users?city=UB&age=20 зам үүсгэ. Хоёр query-г уншаад JSON буцаа:
// json{ "city": "UB", "age": "20" }

// server.get("/users", (req: Request, res: Response) => {
//   const { city, age } = req.query;

//   res.status(200).json({ city, age });
// });

// 6-р бодлого руу орцгооё! 💪
// /profile/:username зам үүсгэ. x-api-key header байвал:
// json{
//   "user": "Bat",
//   "status": "Verified"
// }
// Байхгүй бол "Хандах эрхгүй!" буцаа.

// server.get("/profile/:username", (req: Request, res: Response) => {
//   const apiKey = req.headers["x-api-key"];
//   const username = req.params.username;
//   if (apiKey) {
//     res.status(200).json({ user: username, status: "Verified" });
//   } else {
//     res.status(401).send("Handah erhgui");
//   }
// });

// 1. /user/:name/:age — name болон age-г params-аас авч "Нэр: [name], Нас: [age]" гэж буцаа.

// server.get("/user/:name/:age", (req: Request, res: Response) => {
//   const { name, age } = req.params;

//   res.status(200).send(`Ner: ${name}, Age: ${age}`);
// });

// 2. /calc?x=10&y=5 — x, y-г query-гээс авч хоёрыг хасаад буцаа.

// server.get("/calc", (req: Request, res: Response) => {
//   const x = Number(req.query.x);
//   const y = Number(req.query.y);
//   res.status(200).send(x - y);
// });

// 3. /ping — x-request-id header-ийг уншаад консолд хэвлэ.

// server.get("/ping", (req: Request, res: Response) => {
//   const xRequestId = req.headers["x-request-id"];

//   res.status(200).send("ok");

//   console.log(xRequestId);
// });

// 🟡 Дунд
// 4. /product/:id?currency=USD — id-г params-аас, currency-г query-гээс авч JSON хэлбэрээр буцаа.

// server.get("/product/:id", (req: Request, res: Response) => {
//   const id = req.params.id;

//   const currency = req.query.currency;

//   res.status(200).json({ id, currency });

//   console.log("good job");
// });

// 5-р бодлого руу орцгооё! 💪
// /login — username болон password header байвал "Нэвтэрлээ!", аль нэг нь байхгүй бол "Мэдээлэл дутуу!" гэж буцаа.

// server.get("/login", (req: Request, res: Response) => {
//   const username = req.headers["username"];
//   const password = req.headers["password"];

//   if (username && password) {
//     res.status(200).send("Newterlee");
//   } else {
//     res.status(401).send("Medeelel dutuu");
//   }

//   console.log("good job");
// });

// 6-р бодлого! 💪
// /shop/:category/:productId — params, query (sort, limit), header (x-user-token) бүгдийг авч доорх JSON буцаа:
// json{
//   "category": "...",
//   "productId": "...",
//   "sort": "...",
//   "limit": "...",
//   "token": "Verified эсвэл Unauthorized"
// }
// Санамж:

// category, productId → req.params
// sort, limit → req.query
// x-user-token → req.headers
// token байвал "Verified", байхгүй бол "Unauthorized"

// server.get("/shop/:category/:productId", (req: Request, res: Response) => {
//   const { category, productId } = req.params;
//   const { sort, limit } = req.query;

//   const userToken = req.headers["x-user-token"];

//   if (userToken) {
//     res.status(200).json({
//       category: category,
//       productId: productId,
//       sort: sort,
//       limit: limit,
//       token: "Verified",
//     });
//   } else {
//     res.status(401).json({ token: "Medeelel Unauthorized" });
//   }

//   console.log("good job");
// });

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
