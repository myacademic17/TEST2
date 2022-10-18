var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.listen(HTTP_PORT); 

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
} 

app.get("/", function(req, res){
    let resText = "<h2>Declaration</h2> <br><br>";
    resText += "I declare that this test is in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source. <br><br>";
    resText += "Name: <mark>Humaira Shaikh</mark> <br><br>";
    resText += "Student Number: <mark>139877203</mark> <br><br>";
    resText +=  "<a href = './BSD'> Click to visit BSD Students </a> "; 
    resText +=  "<a href = './highGPA'> Click to see who has the highest GPA </a> "; 
    res.send(resText);
});
 
app.use((req,res)=>{
    res.status(404).send("Error 404: Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);