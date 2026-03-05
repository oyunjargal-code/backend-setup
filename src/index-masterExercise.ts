import express from "express";
import { Request, Response } from "express";
import { todo } from "node:test";

const server = express();
const port = 3000;

server.use(express.json());

// 🏆 Мастер Даалгавар: "Бүгдийг нэг дор"
// Сценари: Номын сангийн систем. Ном хайх үйлдэл хийнэ.
// Шаардлага:
// Method: GET
// Path: /library/:category/:bookId
// Заавар:
// category болон bookId-г Params-аас авна.
// lang (хэл) гэсэн мэдээллийг Query-гээс авна.
// x-api-key гэсэн нууц кодыг Headers-ээс шалгана.
// Хэрэв Header-т түлхүүр байхгүй бол "Хандах эрхгүй" гэсэн алдаа буцаана.
// Бүх мэдээлэл зөв бол доорх хэлбэрээр хариу илгээнэ:
// JSON
 
// Plain Text
// {
  // "status": "Амжилттай",
  // "request_info": {
  //   "method": "GET",
  //   "path": "/library/science/505"  },  "extracted_data": {
  //   "category": "science",
  //   "id": "505",
  //   "language": "mn",
  //   "auth": "Verified"
  // }
// }

// Багшийн зөвлөгөө:
// express санг суулгасан байх (npm install express).
// req.params, req.query, req.headers объектыг ашиглана.
// Header-ийн түлхүүр үгийг жижиг үсгээр уншдаг гэдгийг санаарай (req.headers['x-api-key']).

server.get("/library/:category/:bookId",(req: Request, res: Response)=>
{
  const category= req.params.category
  const bookId= req.params.bookId

  const lang= req.query.lang

  const apiKey= req.headers["x-api-key"]

  if(apiKey) 
  {
    return res.status(200).json({"status": "Амжилттай",
  "request_info": {
    "method": "GET",
    "path": "/library/science/505"  },  "extracted_data": {
    "category": category,
    "id": bookId,
    "language": "mn",
    "auth": "Verified"
  }})
  }
  else {
     return res.status(401).send("handah erhgui")
  }
})


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


