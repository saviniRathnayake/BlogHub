const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 5000;

// to resolve cors errors
app.use(cors());

app.get('/',(req,res)=>{
    res.send("savini Rathnayake");
});

app.listen(PORT,()=>{
    console.log('Server is listening on PORT: ${PORT}');
})
