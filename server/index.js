import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, PoNew!!");
});

app.listen(5001, () => {
  console.log("Start PoNew~!");
});
