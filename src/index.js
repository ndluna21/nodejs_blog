const path = require("path");
const express = require("express");
const { engine } = require ('express-handlebars');
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine("hbs", engine({
    extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/luna", (req, res) => {
    // res.send("Hello World!");
    res.render("home");
});

app.get("/news", (req, res) => {
    // res.send("Hello World!");
    res.render("news");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
