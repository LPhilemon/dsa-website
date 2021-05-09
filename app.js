//jshint esversion:6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


//TODO
app.get("/", (req,res) => {
    res.render("home");
});

app.get("/chapter1", (req,res) => {
  res.render("chapter1");
});

app.get("/chapter2", (req,res) => {
  res.render("chapter2");
});

app.get("/chapter3", (req,res) => {
  res.render("chapter3");
});

app.get("/chapter4", (req,res) => {
  res.render("chapter4");
});

app.get("/chapter5", (req,res) => {
  res.render("chapter5");
});
app.get("/chapter6", (req,res) => {
  res.render("chapter6");
});
app.get("/chapter7", (req,res) => {
  res.render("chapter7");
});
app.get("/chapter8", (req,res) => {
  res.render("chapter8");
});
app.get("/chapter9", (req,res) => {
  res.render("chapter9");
});
app.get("/chapter12", (req,res) => {
  res.render("chapter12");
});
app
app.get("/chapter13", (req,res) => {
  res.render("chapter13");
});

app.get("/fibonacci", (req,res) => {
  res.render("fibonacci");
});

app.get("/factorial", (req,res) => {
  res.render("factorial");
});

app.get("/factorials", (req,res) => {
  res.render("factorials");
});

app.post("/factorial", (req,res) => {

               // program to find the factorial of a number

                        // take input from the user
                      //  const number = parseInt(prompt('Enter a positive integer: '));
                        let number = req.body.Number;
                        let orig = req.body.Number;
                        let fact;

                        // checking if number is negative
                        if (number < 0) {
                            console.log('Error! Factorial for negative number does not exist.');
                        }

                        // if number is 0
                        else if (number === 0) {
                            console.log(`The factorial of ${number} is 1.`);
                        }

                        // if number is positive
                        else {
                             fact = 1;
                            for (i = 1; i <= number; i++) {
                                fact *= i;
                            }
                            console.log(`The factorial of ${number} is ${fact}.`);
                        }
                        res.render("factorial", {Numbers: orig, Factorial: fact});

});

app.get("/fibonaccis", (req,res) => {
  res.render("fibonaccis");
});


app.post("/fibonacci", (req,res) => {


 // program to generate fibonacci series up to n terms

               // take input from the user
              //  const number = parseInt(prompt('Enter the number of terms: '));
               let number = req.body.Number;
               let orig = req.body.Number;
               let fibArray = [];
               let n1 = 0, n2 = 1, nextTerm;
                
               console.log('Fibonacci Series:');
                
               for (let i = 1; i <= number; i++) {
                   console.log(n1);
                   fibArray.push(n1);
                   nextTerm = n1 + n2;
                   n1 = n2;
                   n2 = nextTerm;
               }

               res.render("fibonacci", {Numbers: orig, FibArray: fibArray});

});

app.get("/stack", (req,res) => {
  res.render("stack");
});

app.get("/stacks", (req,res) => {
  res.render("stacks");
});

app.get("/hanoi", (req,res) => {
  res.render("hanoi");
});

app.get("/queue", (req,res) => {
  res.render("queue");
});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});