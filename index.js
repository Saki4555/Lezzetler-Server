const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

const chefs = require('./data/chef.json');

app.get('/', (req, res) =>{
    res.send('hello');
});
app.get('/chefs', (req, res) =>{
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const choosedChef = chefs.find( chef => chef.id === id);
   
    res.send(choosedChef);
});

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})