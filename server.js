const express = require("express");
const app = express();
var cors = require('cors')
const morgan = require("morgan");
const home = require("./routes/home");
const path = require("path");

var database = require('./Database');

const user = {
  username: '',
  password:'',
  type:''
}

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
  console.log("!!!");
  res.json({ status: "Running" });
});

app.get("/api/CreateCustomer", async (req, res) => {
  const data = await database.CreateCustomer(req.query.username, req.query.password,req.query.name, req.query.description, req.query.address);
  res.json(data);
});

app.get("/api/CreateManufacturer", async (req, res) => {
  const data = await database.CreateManufacturer(req.query.username, req.query.password,req.query.name, req.query.description, req.query.address);
  res.json(data);
});

app.get("/api/CreateProduct", async (req, res) => {
  const data = await database.CreateProduct(req.query.username, req.query.productname, req.query.description, req.query.url);
  res.json(data);
});

app.get("/api/CreateOrder", async (req, res) => {
  const data = await database.CreateOrder(req.query.username, req.query.manu_username,req.query.productname);
  res.json(data);
});

app.get("/api/getProducts", async (req, res) => {
  const data = await database.getProducts();
  res.json(data);
});

//getProduct_Manufacturer
app.get("/api/getProduct_Manufacturer", async (req, res) => {
  const data = await database.getProduct_Manufacturer(req.query.username);
  res.json(data);
});
app.get("/api/getOrder", async (req, res) => {
  const data = await database.getOrder(req.query.username);
  res.json(data);
});

app.get("/api/removeOrder", async (req, res) => {
  const data = await database.removeOrder(req.query.username,req.query.productName);
  res.json(data);
});

app.get("/api/verifyLogin", async (req, res) => {
  if(req.query.type == 'customer'){
   const data = await database.verifyLogin_Customer(req.query.username, req.query.password);
   user.username = req.query.username;
   user.password = req.query.password;
   user.type = req.query.type;
   res.json(data);
  }else{
    const data = await database.verifyLogin_Manuf(req.query.username, req.query.password);
    user.username = req.query.username;
    user.password = req.query.password;
    user.type = req.query.type;
    res.json(data);
  }

});

app.get("/api/seasion", (req, res) => {
  res.json(user);
});

app.get("/api/logout", async (req, res) => {
  user.username = "";
  user.password = "";
  user.type = "";
  res.json({status:"loged out"});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

database.Connect();