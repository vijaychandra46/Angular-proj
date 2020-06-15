require('./models/db');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./router/index.router')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

app.listen(3000, () => {
    console.log('Server started at port:3000');
});


//error handler
app.use((err, req, res, next)=>{
    if(err.name == 'ValidationError'){
        var valError = [];
        Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
        res.status(422).send(valError)
    }
});

//server port
