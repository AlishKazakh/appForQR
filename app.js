//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));



app.get("/:dateQuantity", function(req, res){
  res.render("post",{dateQuantity: req.params.dateQuantity})
})




app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 5000");
});
