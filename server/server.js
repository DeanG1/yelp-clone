require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json())

//Get all Restaurants
app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran")
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
app.post("/api/v1/restaurants", (req, res)=>{
    console.log(req.body);
});

//Update Restaurants 

app.put("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.params.id);
    console.log(req.body)
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

