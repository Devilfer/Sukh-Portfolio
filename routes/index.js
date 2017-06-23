let express = require('express');
let router = express.Router();


/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    //date: currentDate
   });
});



module.exports = router;
