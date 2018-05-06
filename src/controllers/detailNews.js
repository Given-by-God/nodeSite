let express = require('express'),
    router = express.Router(),
    db = require('../models/db'),
    translit = require('../controllers/translitUrl');

 router.route('/')
    .get((req,res) => {
            // console.log('req >>>', req.baseUrl);
            let id = req.baseUrl.split('/')[5];
            // console.log(id);
            let sql = `select * from news WHERE id = '${id}'`;


            db.query(sql, (err, results) => {
                if (err) throw err;

                //similar news
                let tagsForSimilar = results[0].tagsForSimilar.split(',');
                let mainNews = results;

                // console.log(tagsForSimilar[0]);
                // console.log(tagsForSimilar[1]);
                // console.log(tagsForSimilar[3]);
                // select count(id) from news where tagsForSimilar = 'Ванес Мартиросян,Геннадий Головкин'

                let sqlForSimilar = `select * from news
                        WHERE id != ${id}
                        AND tagsForSimilar = "${tagsForSimilar[0]}"
                        OR tagsForSimilar = "${tagsForSimilar[1]}"
                        OR tagsForSimilar = "${tagsForSimilar[0]},${tagsForSimilar[1]}"
                        AND id != ${id} limit 5`;
                let sqlForLatestNews = `SELECT * FROM news ORDER BY id DESC LIMIT 7`;

                // console.log(sqlForSimilar);
                // console.log(sqlForLatestNews);

                db.query(sqlForSimilar, (err, similar) => {
                    if (err) throw err;
                    let similarNews = similar;

                    db.query(sqlForLatestNews, (err, latestNews) => {
                        if (err) throw err;



                        res.render('../src/views/detailNews', {
                            data: mainNews,
                            similarNews: similarNews,
                            latest:latestNews

                        });
                    });
                    });
            });
        }
    );

module.exports = function () {
    return router;
};