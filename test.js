const mongoose = require('mongoose') //MongoDB Guide: https://mongoosejs.com/docs/guide.html

const BlogPost = require('./models/BlogPost') //we import the blogpost model we just created by specifying its relative path.

mongoose.connect('mongodb://127.0.0.1:27017/my_database', {useNewUrlParser: true}); //connect to the database, if my_database doesn't exist it will create it

BlogPost.create({
    title: 'The Mythbusters Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favorite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everywhere at this time of year. They go like this:'
    }, (error, blogpost) => {
        console.log(error,blogpost)
    })

BlogPost.create({
    title: 'Guide to sneakershopping',
    body: 'You should do your research on stockx or goat mobile apps to see how much the sneaker you want goes for.',
}, (error, blogpost) => {
    console.log(error,blogpost)
})

// the /the/ is a wildcard search searching for anything with the word the in the db 
//BlogPost.find({
//    title:/The/ }, (error, blogspot) => {
//    console.log(error,blogspot)
//})

var id = "61d4ddc96389832b1684ca21"

BlogPost.findByIdAndUpdate(id, {
    title:'Updated title'
}, (error, blogspot) =>{
    console.log(error,blogspot)
})

//Deleting single record
// var id = "61d4ddc96389832b1684ca21"

//BlogPost.findByIdAndDelete(id, (error, blogspot) =>{console.log(error,blogspot)})

