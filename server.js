// bring express 
const express = require('express');
const app = express();
// routes
app.get('/',(req, res) => {
    res.send('Hello World!')
})// restful convent



// dount routes 

// CREATE
app.post('/donuts', (req,res) => {
    // get a n object via req.body
    res.send('New donuts is made!');
})

// READ
// GET ALL DONUTS
app.get('/donuts', (req, res) => {
    res.send('Sorry no donuts yet!');
})

// GET A SINGLE DONUT 
app.get('/donuts/:id', (req,res) => {
    res.send('Here is your single donut!');
})

// DELETE A DONUT 
app.delete('/donuts/:id', (req,res) => {
    res.send('delete donuts!');
})

// UPDATE A DONUT
app.patch('/donuts/:id', (req,res) => {
    // Info in the req.body
    res.send('placeholder update');
})



// listen on port
app.listen(3000), function () {
    console.log('Ready')
}



