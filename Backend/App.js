const express=require("express");


const env=require("dotenv");

const mongoose=require("mongoose");

env.config();


const app=express();
app.use(express());


const { Schema } = mongoose;



// mongodb+srv://Mma:<password>@cluster0.omvp2yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



mongoose.connect("mongodb+srv://Mma:root@cluster0.omvp2yh.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority&appName=Cluster0",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);

const db=mongoose.connection;

db.on("error",console.error.bind(console,"connection error"))

db.once("open",function(){
    console.log("connected");
})


const UserSchema=new Schema({
      email:String,
      password:Number,
      address:{
        type:String,
        required:true
      },
      "username":{
        type:String,
        unique:true,
        required:true
    }
});

app.listen(process.env.PORT,()=>{
          console.log(`The Server Is Running On Port${process.env.PORT}`);
})