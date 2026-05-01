console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB chaqirish

const db = require("./server").db;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// 2: Session code

// 3: View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const reja = req.body.reja;
  db()
    .collection("plans")
    .insertOne({ reja: reja }, (err, data) => {
      console.log(data.ops);
      res.json(data.ops[0]);
    });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  const database = db();
  database
    .collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
