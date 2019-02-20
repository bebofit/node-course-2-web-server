const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();
app.set('view engine','hbs')

app.use((req,res,next)=>{
    var now = new Date().toString()
   var log = `${now} ${req.method} ${req.url}`;
   fs.appendFileSync('server.log',log + '\n')   
    next()
});
// app.use((req,res,next=>{
//     res.render('maint.hbs');
// }))

app.use(express.static(__dirname + '/public'))


app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'About Page',
        currentYear : new Date().getFullYear(),
        wel : 'Welcome ya teez'
    });
})

app.get('/bad',(req,res)=>{
    res.send({
        errmsg: 'enta gamed fash5'
    })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear : new Date().getFullYear()
    });
})
app.get('/projects',(req,res)=>{
    res.render('projects.hbs',{
        pageTitle : 'Projects',
        currentYear : new Date().getFullYear()
    })
})
app.listen(port, ()=>{
    console.log(`Server is up on Port ${port}`);
}); 