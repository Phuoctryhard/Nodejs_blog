// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express"); // require vào thu viện nodejs module để tải

const app = express();
const port = 3000;
// đinh nghia : route
// app.get("/", (req, res) => {
//   res.send("Hello World! ss");
// });

app.get("/", function (req, res) {
  res.send("Ngo dinh phuoc dep trai vl s ");
});

// ip : 127.0.0.1  - ánh xạ localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
