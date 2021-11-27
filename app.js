const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Middleware
app.use(express.json());

//Connection to database
mongoose.connect(process.env.MONGODB_URL, () => {
	console.log("Database connected");
});

// Route
app.get('/',(req,res)=>{
    res.json({
        msg:'Health Route connected'
    })
})

app.listen(process.env.PORT, () => {
	console.log("Server running");
});
