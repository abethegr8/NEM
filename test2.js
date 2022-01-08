//import mongoose
const mongoose = require('mongoose')

// import the model we just created
// BlogPost represents the BlogPosts collection in the database
const BlogPost = require('./models/BlogPost')

// if my_database doesn't exist, it will be created for us
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true});

// to create a new BlogPost doc in our database, we will use 
// a function in our model called create

//BASIC CRUD Function used in MongoDB **Critical To Know How to DO** Study this and make notes 

/*Create a blog post using the create function, this the 'C' in CRUD 
BlogPost.create({
    //author: ObjectId,
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'Once you get past the beginner-level energy-saving stuff, a whole new world of thrifty nerdery opens up. Here are some secrets to copping a load of money off your utilities bills. ',    
}, (error, blogpost) =>{
    console.log(error,blogpost)
})
*/
// to utilize findbyID funtion we make the id here and we call it in the function 
var id = "61d8a2dc3cae03ea860d3eb1";

//Find all documents in blogpost collections with /Guide/ in the title , wildcard is / /, this is the 'R' in CRUD, retrieve/find 
/*
BlogPost.find({
    title:'/Guide/'}, (error, blogspot) =>{
    console.log(error,blogspot)
})*/

/*
BlogPost.findByIdAndUpdate(id, {
    title: 'Dont Buy at Stockx or GOAT?'}, (error, blogspot) => {
    console.log(error,blogspot)
})*/

//This is the 'D' in CRUD, DELETE 
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
    console.log(error,blogspot)
})


