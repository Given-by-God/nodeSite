let express = require('express'),
    router = express.Router(),
    db = require('../models/db'),
    translit = require('../controllers/translitUrl');


router.route('/')
    .get((req,res) => {

            let sql = 'SELECT * FROM news ORDER BY id DESC ';
            db.query(sql, (err, results) => {
                if (err) throw err;
                // console.log( (results[0].date).toLocaleDateString('en-ES'));

                res.render('../src/views/news', {data: results});
            });
        }

    )
    .post((req,res) => {

    });

module.exports = router;