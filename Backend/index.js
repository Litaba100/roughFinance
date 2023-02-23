require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const budgetRoutes = require('./routes/budget');
const userRoutes = require('./routes/user');

//express app
const app = express();

//Middleware
app.use(
  express.urlencoded({ extended: true })
);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors()); 
app.use((req , res , next) => {
    console.log(req.path , req.method );
    next()
})

//Routes

app.use('/api/budget' ,budgetRoutes);
app.use('/api/user' ,userRoutes);

//connect to DB
mongoose.connect('mongodb://localhost/TestDBZ', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>{
    app.listen(process.env.PORT , ()=>{
        console.log("MongoDB connected , Server started on port 5000")
    });
  })
  .catch(err => console.log(err));


//listening for requests
// app.listen(process.env.PORT , ()=>{
//     console.log("Server started on port 5000")
// });