const express = require("express");

const app = express();
 
const PORT = 4000 ;
app.listen(PORT , () => console.log(`server running on Port ${PORT}`));

const today = new Date();

const day = today.getDay();
const hours = today.getHours();
 
if(day >= 1 && day <= 5 && hours >= 9 && hours < 15){  
app.get("/home",(req, res)=> {
    app.use(express.static(__dirname + "/public"));
    res.sendFile(__dirname+"/public/index.html");
});
} else {
    app.get("/",(req, res)=> {
        app.use(express.static(__dirname + "/closed"));
        res.sendFile(__dirname+"/closed/index.html");
    });
}