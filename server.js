const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 5000;

// to resolve cors errors
app.use(cors());

app.get('/',(req,res)=>{
    res.send("savini Rathnayake");
});

mongoose.connect(process.env.DB_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on PORT: ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
})


