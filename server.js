const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

//intializing app and declaring the port
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("database connected");
})

//defining routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

// start listining
app.listen(port,()=>{
    console.log("Server is running on port: " + port);
});