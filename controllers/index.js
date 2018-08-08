var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next) {
    res.render('index', {
        title: 'Express',
        message: ''

    });
});
router.get('/About',function(req, res, next) {

    res.render('About',{
        title: 'About',
        message: 'About page'
    });
    });
router.get('/Projects',function(req, res, next) {

    res.render('Projects',{
        title: 'Projects',
        message: 'Projects page'
    });
});
router.get('/Services',function(req, res, next) {

    res.render('Services',{
        title: 'Services',
        message: 'Services page'
    });
});

router.get('/Contact',function(req, res, next) {

    res.render('Contact',{
        title: 'Contact',
        message: 'Contact page'
    });
});


module.exports = router;
