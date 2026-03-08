const express = require('express');
const app = express(); //Calling express as a function sets up server
const userRouter = require('.routes/users');
const wordRouter = require('./routes/words');
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/users', userRouter);
app.user('/words', wordRouter);
app.get('/',
(req, res)=>{
    console.log('Here');
    res.render('index', {userName: "George"});
});

app.listen(3030);