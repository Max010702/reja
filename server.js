const http = require("http");
const { MongoClient } = require("mongodb");

let client;
const connectionString =
  "mongodb+srv://max25200134:Maxim010702@cluster0.c0ogwek.mongodb.net/Reja";

module.exports = {
  db: () => client.db("Reja"),
};

MongoClient.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, c) => {
    if (err) console.log("ERROR on connection MongoDB", err);
    else {
      client = c;
      console.log("MongoDB connection succed");
      const app = require("./app");
      const server = http.createServer(app);
      server.listen(3044, () =>
        console.log(
          "The server is running successfully on port 3044, http://localhost:3044",
        ),
      );
    }
  },
);