const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017/toDo').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error', ()=>{
    console.log("MongoDb Connection error");
});

module.exports = connection;
