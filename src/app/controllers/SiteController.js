const Course = require('../models/Course')

class SiteController {

    // [GET] / news
    index(req, res) {
        Course.find({})
            .then(courses => {res.json(courses)})
            .catch(err => {res.status(400).json({error: "ERROR..!!!"})})
        
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

module.exports = new SiteController;