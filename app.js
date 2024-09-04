// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require("dotenv").config();
// require("./v1/models/db");

// const port = process.env.PORT || 8888;
// const app = express();
// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Expose-Headers", "x-access-token,x-refresh-token");
//   next();
// });

// app.use(bodyParser.json());

// app.use("/api/v1/auth", require("./v1/routes/auth.route"));
// app.use("/api/v1/project", require("./v1/routes/project.route"));

// app.listen(port, () => {
//   console.log(`server is listening on port ${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./v1/models/db");

const port = process.env.PORT || 8888;
const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "x-access-token,x-refresh-token");
  next();
});

app.use(bodyParser.json());

app.use("/api/v1/auth", require("./v1/routes/auth.route"));
app.use("/api/v1/blog", require("./v1/routes/blog.route"));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
