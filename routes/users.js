let express = require('express');
let path = require('path');
let router = express.Router();

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