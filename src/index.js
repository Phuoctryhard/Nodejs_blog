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
const path = require("path");
const { create, engine } = require("express-handlebars");
const express = require("express"); // require vào thu viện nodejs module để tải
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require("./router");

// import mongodb
const db = require("./congig/db");
//connect db
db.connect();

app.use(morgan("combined"));

// middeware xử lì form submit lên
app.use(
  express.urlencoded({
    extended: true,
  })
);
// javscipt gửi lên
app.use(express.json());
// đinh nghia : route
// app.get("/", (req, res) => {
//   res.send("Hello World! ss");
// });
const hbs = create({});
// Register `hbs.engine` with the Express app.
// định nghãi handlebars
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", ".hbs");
// chú ý views này nha
app.set("views", path.join(__dirname, "resource", "view"));

// console.log("path " + path.join(__dirname, "resource/views"));

//override method
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// định nghĩa tuyến đường init

route(app);

// ip : 127.0.0.1  - ánh xạ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
