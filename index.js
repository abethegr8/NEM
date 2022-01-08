const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true}); //connect to the database, if my_database doesn't exist it will create it

const app = new express()
const ejs = require('ejs') //https://ejs.co/#docs

const bodyParser = require('body-parser') //installed via npm install body-parser, middleware parse incoming request bodies in a middleware, make form data available under the req.body property
const BlogPost = require('./models/BlogPost.js')

// here we tell Express to use EJS as our templating engine, any file ending in .ejs should render with EJS package
// There are many templating engines out there like HandleBars, pug and more...
app.set('view engine', 'ejs') 

app.use(express.static('public'))
app.use(bodyParser.json()) //bodyparser functions to be able to run 
app.use(bodyParser.urlencoded({extended:true}))

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

//This is the part where the routing goes for every link on the page, about,contact,post,create, all go here and need a app.get() function called

app.get('/', async (req,res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html')) This is the old static way to direct the pages to the static version
    const blogposts = await BlogPost.find({})
    res.render('index', {
        blogposts
    }); //new way to direct via Dynamic using EJS
})

app.get('/about',(req,res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about');
})

app.get('/contact',(req,res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact');
})

app.get('/post',(req,res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post');
})

app.get('/posts/new',(req,res) =>{
    res.render('create')
})
//This function will handle the POST request 
app.post('/posts/store', async (req,res) => { 
    //model creates a new doc with browser data
    await BlogPost.create(req.body)
        console.log(req.body)
        res.redirect('/')
})

