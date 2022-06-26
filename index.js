const express = require("express");
const bodyParser = require("body-parser");
const date = require("./Date/dayList");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  const day = date();
  res.render("list", { kindOfDay: day, itemOfDay: items });
});

app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item);
  console.log(req.body.newItem);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));

/*
Sunday
monday
tuesday
wednesday
thursday
friday
saturday
*/
