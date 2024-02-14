require("dotenv").config();
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("yeah middle ware");
    next();
})


//Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status:"success",
        data:{
            restaurant:["mcdonalds","wendys"]
        },
    });
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.params);
});

//Create a Restaurant
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req);
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

