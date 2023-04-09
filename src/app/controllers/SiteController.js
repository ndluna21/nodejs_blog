const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../ulti/mongoose");

class SiteController {
    // [GET] / news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render("home", { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);

        // res.json({
        //     name: 'test'
        // })

        // res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
