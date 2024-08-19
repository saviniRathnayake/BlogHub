const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Import the Blog model from blog.model.js
const Blog = require('./models/blog.model');

const PORT = 5000;

// to resolve CORS errors
app.use(cors());
app.use(express.json());

//get all blogs
app.get('/get-all-blogs',async(req,res)=>{
    try{
        const blogs = await Blog.find({});
        res.send({count:blogs.length, data:blogs});
    }catch(err){
        console.log(err);
        res.status(400).send({ message: "Something went wrong!", error: err.message });
    }
});

//get single blog
app.get('/blog/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Blog.findById(id);
        console.log(response);
        res.send(response);
    }catch(err){
        console.log(err);
        res.status(400).send({ message: "Something went wrong!", error: err.message });
    }
});

//update a blog

app.put('/blog/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Blog.findByIdAndUpdate(id,data,{returnOriginal:false});
        console.log(response);
        res.send(response);
    }catch(err){
        console.log(err);
        res.status(400).send({ message: "Something went wrong!", error: err.message });
    }
});

//delete a blog
app.delete('/blog/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Blog.findByIdAndDelete(id);
        console.log(response);
        res.send("Success!");
    }catch(err){
        console.log(err);
        res.status(400).send({ message: "Something went wrong!", error: err.message });
    }
});


//create blog
app.post('/create-blog', async (req,res) => {

    try {
        const data = req.body;
        const blog = new Blog(data);
        const response = await blog.save();
        console.log(response);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Something went wrong!", error: err.message });
    }
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT: ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
