/**
 * imports the Express framework into this Node.js application
 * require("express") is a Node.js function used to import modules.
 * The express module is a popular Node.js framework used for building web applications and APIs.
*/

const express = require('express');
const bodyParser = require('body-parser');


/**
 * creating a new server
 * This line creates an instance of the Express application.
 * express() creates a new Express application.
 * This instance of the application (app) will be used to define routes, middleware, and handle HTTP requests and responses.
*/
const app = express()

/**
 * Now that we have got our body-parser,
 * the next step is to get our app to use it.
 * bodyParser works with express
 * 
 * whenever we want to grab an information that 
 * got posted to my server from an html form, we
 * are going to use ```bodyParser.urlencoded()```
 */

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
})

/**
 * LET'S HANDLE ANY POST REQUESTS THAT COMES TO A ROUTE
 * 
 * We will need another package called ```body-parser```
 * It allows us to parse the information we get from a post request
 */

app.post("/", function (request, response) {
    console.log(request.body);
    const req = request.body;
    var answer = Number(req.num1) + Number(req.num2);
    response.send(`The answer is ${answer}`)
})

/**
 * FOR THE BMI CALCULATOR
 */

app.get("/bmicalculator", function (request, response) {
    response.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function (request, response) {
    var req = request.body;

    var height = parseFloat(req.height);
    var weight = parseFloat(req.weight);
    var bmi = weight / (height ** 2);

    response.send(`your bmi is ${bmi}`);
});

app.listen(3000);

/**
 * STATUS CODES AND MEANINGS
 * 
 * 1**: Hold on, something is going to happen
 * 2**: Here you go (successful)
 * 3**: Go away (some security involved)
 * 4**: You screwed up
 * 5**: I screwed up
 */