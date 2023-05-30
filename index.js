//core modules
let express = require('express');
let app = express();

console.log(express);
console.log(app)

//custom modules
// let f =  require('./module/fun_based');
// let v =  require('./module/variable_based');
// let a = require('./module/variable_based');
//Route modules
// let users = require('./routes/users');

// app.use('/users',users);

app.set('view engine', 'ejs');
//Line from demo 1 branch

app.get('/', (req,res) => {
    res.render('index',{
        name : "Ganesh Kale",
        age: 28,
        gender : "Male"
    });
});

app.get('/about', (req,res) => {
    res.render( 'about');
});

app.get('/download',(req,res) => {
    //Adding extention is compulsory
    res.download(__dirname + '/views/about.ejs');
});


console.log(__filename);

// console.log(a); 
// console.log(f.foo());

app.listen(4000);