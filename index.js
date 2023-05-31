//core modules
let express = require('express');
let app = express();


//custom modules
// let f =  require('./module/fun_based');
// let v =  require('./module/variable_based');
// let a = require('./module/variable_based');

//Route modules
let users = require('./routes/users');
let products =  require('./routes/products');

app.use('/users',users);
app.use('/products',products);

app.set('view engine', 'ejs');
//Line from demo 1 branch

//Routes fro EJS template pages
// app.get('/', (req,res) => {
//     res.render('index',{
//         name : "Ganesh Kale",
//         age: 28,
//         gender : "Male"
//     });
// });

// app.get('/about', (req,res) => {
//     res.render( 'about');
// });

// app.get('/download',(req,res) => {
//     //Adding extention is compulsory
//     res.download(__dirname + '/views/about.ejs');
// });





app.listen(4000);