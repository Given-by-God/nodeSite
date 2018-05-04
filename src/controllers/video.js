let express = require('express');
let router = express.Router();
let app = express();


router.route('/')
    .get((req,res) => {
        res.render("../src/views/video");
        // res.send("test book");
    });

module.exports = router;



