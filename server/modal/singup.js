var monguoose=require('mongoose');

var singup=monguoose.model("user",{
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    address:{
    minlength:2,
    type:String,
    trim:true,
   required:true
},
mobile:{
    type:Number,
    required:true,
  
    trim:true
},
profile:{
    required:true,
    type:String,
    minlength:1,
    trim:true
},pass:{
    required:true,
    type:String,
    minlength:1,
    trim:true
}
});

module.exports={singup}