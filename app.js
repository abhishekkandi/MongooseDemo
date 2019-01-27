const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb", {useNewUrlParser: true});

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);
/*Here "Cat" is a name of the singular version of the model. Which creates a collection with the plural name of that model(In this case 'Cats').*/

//1 - Adding a new cat to Database
let groot = new Cat({
    name: "Groot",
    age: 6,
    temperament: "EWEWEW"
})

groot.save(function(err, cat){
    if(err) {
        console.log("SOMETHING WENT WRONG!");
    } else {
        console.log("We just saved a cat to the DB:");
        console.log(cat);
    }
});

//2 - Retrieving "cats" from Database
Cat.find({}, function(err, cats){
    if(err) {
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS");
        console.log(cats);
    }
});

//3 - We can create an object, inserting the 
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){ 
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});



