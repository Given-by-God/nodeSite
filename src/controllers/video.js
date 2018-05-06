let express = require('express'),
    router = express.Router();

router.route('/')
    .get((req,res)=>{
       res.render('../src/views/video');
    }
    );
module.exports = router;

