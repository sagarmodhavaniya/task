var express=require('express')
var bodyp=require('body-parser')
// const _=require('lodash')
var {mongoose}=require('./dbcon')
var {ObjectID}=require('./dbcon')
var {singup}=require('./modal/singup')
var app=express();
app.use(bodyp.json())

app.post('/user',(req,res)=>{
    var indata=new singup({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        mobile:req.body.mobile,
        profile:req.body.profile,  
        pass:req.body.pass

    })
    console.log(req.body)
      indata.save().then((result)=>{
          res.send(result)
          console.log("done insert")
          },(err)=>{
          res.send(err)
    console.log("error")
          })
      
  })

  app.get('/login/:email/:pass',(req,res)=>{
    var id=req.params.email
   var pass=req.param.pass
   console.log(id)
    data.findOne({email:req.body.email,
            pass:req.body.pass
    }).then((result)=>{
        if(! result){

                    res.status(404).send()
        }
            res.send(result)
    }).catch((e)=>res.status(404).send())

})
  app.listen(1234,()=>{
    console.log("server running on port 1234")
})