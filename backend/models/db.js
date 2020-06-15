const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)//to hide error 14912 message in terminal
mongoose.connect('mongodb://localhost:27017/TenderDB',{useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('MongoDB is connected successfully');
    }else{
        console.log('MongoDB connection error: ' + err);
    }
});

require('./user.model');