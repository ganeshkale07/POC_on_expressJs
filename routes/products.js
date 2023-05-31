const express = require('express');
const apiKeyMiddleware = require('../middlewares/apiKey');
const router = express.Router();

//on single router middleware added
router.get('/',apiKeyMiddleware,(req,res) => {
    res.json({
        message:"Products received !"
    });
})

module.exports = router;