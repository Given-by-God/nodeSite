// let express = require('express'),
//     app = express();




// module.exports = function(app) {
//     app.get('/video', (req, res) => {
//         res.render('../src/views/video');
//         console.log('video is include');
//     });
// };

module.exports = {
    video: function (req, res) {
        res.render('../src/views/video');
        console.log('video is include');
    }
};



// let exports = module.exports = {};
