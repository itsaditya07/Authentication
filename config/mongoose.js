const mongoose=require('mongoose');

mongoose.connect(process.env.mongodb_atlas_url);

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting to DataBase"));

db.once('open',function(){
    console.log("yeah .. successfully connected to database");
})

module.exports=db;
