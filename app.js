const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

const RoutesUser = require("./routes/users");
const RoutesPost = require("./routes/posts");
const RoutesComment = require("./routes/reviews");
const rotuer = require("./routes");
const { sequelize } = require("./models");
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });
/*app.use(
  cors({
    credentials: true,
    origin: "http://hanghae99-s8week6.s3-website.ap-northeast-2.amazonaws.com",
  })
);*/
//app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json()); // body로 들어오는 json 형태의 데이터를 파싱해준다.
app.use("/api", rotuer);
// app.use("/api", [RoutesLogin, RoutesUser, RoutesPost, RoutesComment]);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

module.exports = app;
