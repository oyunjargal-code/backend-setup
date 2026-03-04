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


// Params бодлогууд (req.params)
// 1. /hello/:name зам үүсгэ. name-ийг уншаад "Сайн байна уу, [нэр]!" гэж буцаа.

server.get("/hello/:name", (req: Request, res: Response)=>
{
  res.status(200).send(`sain bna uu? ${req.params.name}`)

  console.log(`sain bna uu? ${req.params.name}`)
})

// 2. /age/:age зам үүсгэ. age-ийг уншаад "Чи [нас] настай байна" гэж буцаа.

server.get("/age/:age", (req: Request, res: Response)=>
{
  res.status(200).send(`Чи ${req.params.age} настай байна`)

  console.log(`Чи ${req.params.age} настай байна`)
})

// 3. /add/:a/:b зам үүсгэ. Хоёр тоог нэмээд үр дүнг буцаа. (Санамж: params бол string байдаг, тоо болгохын тулд Number() ашигла)

server.get("/add/:a/:b",(req: Request, res: Response)=>
{

const a= Number(req.params.a)
const b= Number(req.params.b)
const c=a+b;


  res.status(200).send(`Niilber ni: ${c}= ${a}+${b}`)

  console.log(`Niilber ni: ${c} = ${a}+${b}`)
})

// 2-р даалгавар: Query (Хайлтын мөр)
// Тайлбар: URL-ийн ард ? тэмдгээр зааглагдаж ирдэг нэмэлт өгөгдөл.
// Даалгавар: /filter зам үүсгэж, city болон age гэсэн query-г уншиж аваад JSON хэлбэрээр буцаа.
// Турших URL: http://localhost:3000/filter?city=Ulaanbaatar&age=20

// server.get("/filter", (req: Request, res: Response) => {
//   const { city, age } = req.query;
//   res.status(200).json({ city: city, age: age });

//   console.log("okey");
// });

// Query бодлогууд (req.query)
// 4. /greet?name=Bat — name query-г уншаад "Сайн байна уу, Bat!" гэж буцаа.

server.get("/greet", (req: Request, res: Response)=>
{
  const {name} =req.query;

  res.status(200).send(`sain bna uu?, ${name}`)

  console.log(`sain bna uu?, ${name}`)
})

// 5. /multiply?a=3&b=4 — хоёр тоог үржүүлээд буцаа.

server.get("/multiply",(req: Request, res: Response)=>
{
  const a =Number(req.query.a);
  const b =Number(req.query.b);
  const c= a*b;

  res.status(200).send(`Hoyr toonii urjwer ni: ${c}`)

  console.log(`Hoyr toonii urjwer ni: ${c}`)
})

// 6. /search?keyword=apple — "Та [keyword]-г хайлаа" гэж буцаа.

server.get("/search", (req:Request, res: Response)=>
{
  const {keyword}= req.query;

  res.status(200).send(`Ta ${keyword}-g hailaa`)

  console.log(`Ta ${keyword}-g hailaa`)
})

// Headers бодлогууд (req.headers)
// 7. /whoami зам үүсгэ. user-agent header-ийг консолд хэвлэ.

server.get("/whoami", (req: Request, res: Response)=>
{
  const userAgent= req.headers["user-agent"];

  res.status(200).send(`${userAgent}`)

  console.log(`${userAgent}`)
})

// 8. /secret зам үүсгэ. auth-token header байвал "Тавтай морил!", байхгүй бол "Токен байхгүй!" гэж буцаа.

server.get("/secret", (req: Request, res: Response)=>
{
const authToken= req.headers["auth-token"]

if(authToken)
{
  console.log(`Tawtai moril`)
  return  res.status(200).send(`Tawtai moril`)
}
else {
  console.log(`Token bhgui`)
  return res.status(404).send(`Token bhgui`)
}

  
})

// 3-р даалгавар: Headers (Толгой мэдээлэл)
// Тайлбар: Хэрэглэгчийн харагдах орчинд биш, хүсэлтийн далд мета өгөгдөлд байдаг мэдээлэл.
// Даалгавар: Хүсэлтийн header-ээс user-agent (хөтөч) болон auth-token гэсэн мэдээллийг авч консол дээр хэвлэ.
// Турших хэрэгсэл: Postman эсвэл Hoppscotch ашиглан Header хэсэгт утга өгч шалгана.

server.get("/headers", (req: Request, res: Response) => {
const userAgent= req.headers["user-agent"]
const authToken= req.headers["auth-token"]

  res.status(200).send(`${userAgent} bas ${authToken}`);

  console.log(`${userAgent} bas ${authToken}`);
});

// 4-р даалгавар: Path & Method (Зам ба Үйлдэл)
// Тайлбар: Аль замаар, ямар үйлдлээр (GET, POST, PUT, DELETE) хандаж байгааг тодорхойлох.
// Даалгавар: Дурын зам дээр req.path болон req.method-ийг ашиглан "Та [path] зам руу [method] хүсэлт илгээлээ" гэж хариул.

server.get("/info", (req: Request, res: Response)=>
{
  const path= req.path
  const method= req.method

  res.status(200).send(`Ta ${path} zamruu ${method} huselt ilgeelee`)

  console.log(`Ta ${path} zamruu ${method} huselt ilgeelee`)
})


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


