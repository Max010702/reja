console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/response")
const app = express();
const fs = require("fs");

// MongoDB chaqirish

const db = require("./server").db();

// 1: Kirish Code
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// 2: Session code

// 3: View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "succes" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
