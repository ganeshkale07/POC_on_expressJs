function apiKeyMiddleware(req,res,next){
    const systemAPIKey = "123123";
    const userAPIKey = req.query.api_Key;
    console.log(userAPIKey)
    if(userAPIKey && userAPIKey === systemAPIKey){
        next();
    }
    else{
        res.json({
            message : "Invalid Api Key !"
        })
    }
}

//Middleware
//on single route 
//on route file
//application level
//npm packages are there for middleware as well  [ex -> cookie parser]

module.exports = apiKeyMiddleware;