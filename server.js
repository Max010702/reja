// const http = require("http");
// const mongodb = require("mongodb");

// let db;
// const connectionString =
//   "mongodb+srv://max25200134:Maxim010702$@cluster0.c0ogwek.mongodb.net/Reja";

// mongodb.connect(
//   connectionString,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) console.log("ERROR on connection MongoDB");
//     else {
//       console.log("MongoDB connection succed");
//       module.exports = { db: () => client.db("Reja") };
//       const app = require("./app");
//       const server = http.createServer(app);
//       let PORT = 3000;
//       server.listen(PORT, function () {
//         console.log(
//           `The server is running successfully on port ${PORT}, http://localhost:${PORT}`,
//         );
//       });
//     }
//   },
// );

const http = require("http");
const mongodb = require("mongodb");

let client;
const connectionString =
  "mongodb+srv://max25200134:Maxim010702$@cluster0.c0ogwek.mongodb.net/Reja";

module.exports = {
  db: () => client.db("Reja"),
};

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, c) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      client = c;
      console.log("MongoDB connection succed");
      const app = require("./app");
      const server = http.createServer(app);
      server.listen(3000, () =>
        console.log(
          "The server is running successfully on port 3000, http://localhost:3000",
        ),
      );
    }
  },
);
