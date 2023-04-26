const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");

const SortMiddleWare = require("./app/middleware/SortMiddleware");

const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/news", (req, res) => {
    res.render("news");
});

app.use(methodOverride("_method"));

// Customers middleware
app.use(SortMiddleWare);

// app.use(bacBaoVe)

// function bacBaoVe(req, res, next) {
//     if (['vethuong', 'vevip'].includes(req.query.ve)) {
//         req.face = 'Gach gach gach'
//         return next();
//     }
//     res.status(403).json({
//         message: "Access denied"
//     });
// }

// app.get('/middleware',

//     function (res, req, next) {
//         res.json({
//             message: "Successfully",
//             face: req.face
//         });
//     }
// );

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        helpers: require('./helper/handlebars')
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
