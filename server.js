const express = require("express");
const app = express();
var cors = require('cors')
const morgan = require("morgan");
const home = require("./routes/home");
const path = require("path");

var database = require('./Database');


const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); //key=value&key=value as req.body

// serves the built version of your react app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(morgan("tiny")); // HTTP request logger

// Routes
app.use("/api/home", home);

// App
app.get("/api/status", (req, res) => {
  res.json({ status: "Running" });
});

app.get("/api/CreateCustomer", async (req, res) => {
  const data = await database.CreateCustomer(req.query.username, req.query.password,req.query.name, req.query.description, req.query.address);
  res.json(data);
});

app.get("/api/CreateManufacturer", async (req, res) => {
  const data = await database.CreateManufacturer();
  res.json(data);
});

app.get("/api/CreateProduct", async (req, res) => {
  const data = await database.CreateProduct();
  res.json(data);
});

app.get("/api/CreateOrder", async (req, res) => {
  const data = await database.CreateOrder();
  res.json(data);
});

app.get("/api/getProducts", async (req, res) => {
  const data = await database.getProducts();
  res.json(data);
});

app.get("/api/getOrder", async (req, res) => {
  const data = await database.getOrder();
  res.json(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

database.Connect();
