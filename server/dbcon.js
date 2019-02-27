const monguoose=require('mongoose')
const{ObjectID}=require('mongodb');
monguoose.Promise=global.Promise
monguoose.connect('mongodb://localhost:27017/mydb').then(()=>{
    console.log("conn done")
},()=>{
    console.log("error")
});