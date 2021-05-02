const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const contactRouter = require("./routes/contactRouter");


// Database Connections
const MONGODB_STRING = process.env.MONGODB_STRING || "mongodb://localhost/contactApp";
mongoose.connect(MONGODB_STRING, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Database Connected")
    }).catch(error => console.log(`Database Connection Errro: ${error}`))


// Set Middleware

app.use(express.json());
app.use("/", contactRouter)
const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})