const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb://mongo:27017/test", {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() =>{
         console.log('Database connected')
    })
    .catch(err => {
        console.error('Error with connect to database ' + err)
    })
}

module.exports = dbconnect;
