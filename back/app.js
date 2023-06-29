import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello ponew");
});

app.listen(5001, () => {
  console.log("ponew start");
});
