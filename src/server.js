const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/UserDbExample", {useNewUrlParser:true})
    .then(() =>{
         console.log('Database connected')
    })
    .catch(err => {
        console.error('Error with connect to database ' + err)
    })
}

module.exports = dbconnect;
