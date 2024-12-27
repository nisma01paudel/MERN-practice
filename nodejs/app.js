// const a = 10;
// const b = 20;
// // console.log(a)
// // console.log(b)
// const name = "Manish"
// const sum = a + b
// console.log(sum)
// // console.log("Welcome to nodejs")

// //Array
// const numbers = [10,20,30]
// // console.log(numbers[1])
// //  to calculate length of array
// // console.log(numbers.length)

// // objects
// const Person ={
//     name : "Nisa",
//     age: 21
// }
// console.log("This is person name :" + Person.name)
// console.log(Person.age)

const app = require("express")()

//Alternate
//const express = require("express")
//const app = express()
//req-request res- respond
app.get("/",(req,res)=>{
   // console.log(req)
    //res.send("<mark>Hello i am from homepage</mark>")
    res.json({
        message:"I am from home page"
    })
})

//app.get("/hero")
app.get("/contact",(req,res)=>{
    res.send("I am from contact page")
})
app.get("/about",(req,res)=>{
    res.send("I am from about page")
})


app.listen(4000, () => {
    console.log("Nodejs has started at port 4000")
})
