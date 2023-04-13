const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const methodOverride = require('method-override')
const handlebars = require("express-handlebars");

const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b
        }
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Home, Search, Contact

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
