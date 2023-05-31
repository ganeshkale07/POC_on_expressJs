let express = require('express');
let path = require('path');
const apiKeyMiddleware = require('../middlewares/apiKey');
let router = express.Router();

//Add router level middleware
//method use -> use(<middleware_name) 
router.use(apiKeyMiddleware);

router.get('/',(req,res) => {
    res.sendFile(__dirname +'/index.html');
});

router.get('/about',(req,res) => {
    res.sendFile(__dirname +'/about.html');
});

router.get('*',(req,res) => {
    res.send({
        status:404,
        statusMesg :"PAGE NOT FOUND"
    });
})

module.exports = router;