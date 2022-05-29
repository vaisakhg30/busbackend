const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")

var app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use((req, res, next) => { 
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"   ); 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"   ); 
    next(); });

    var busmodel=mongoose.model("buses",
    new mongoose.Schema({
        route:String,
        busname:String,
        busregno:String,
        owmer:String,
        contactnum:String

    })
    )
    
    mongoose.connect("mongodb+srv://anjalireghunath:9846434831@cluster0.ursz9.mongodb.net/student1DB")

app.get("/api/viewall",(req,res)=>{
    busmodel.find(
        (error,data)=>{
            if(error){
                res.send({"status":"error"})
            }
            else{
                res.send(data)
            }

        }
    )

}

)


    app.post("/api/addroute",(req,res)=>{
        var data=req.body
        let ob=new busmodel(data)
        ob.save(
            (error,data)=>{
                if(error)
                {
                    res.send({"status":"error"})
                }
                else{
                    res.send({"status":"success","data"})
                }
            }
        )
        app.listen(4001,()=>{
            console.log("server running")

        }
            )



    }


    )