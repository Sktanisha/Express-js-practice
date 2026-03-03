import express from "express"
import path from "Path"
const app = express()

app.use(express.json());


app.get("/", (req,res)=>{
   //  res.send("hello from express get method")
   res.sendFile(path.join(__dirnameCC,'index.html'))
})


/* app.post("/create-user", (req,res)=>{
    if(req.body.email == "admin@gmail.com"){
        if(req.body.password == "12345"){
            res.send("login successful")
        }else{
            res.send("Password incorrect")
        }
    }else{
        res.send("email not found")
    }
})
 */
app.listen(8080,()=>{

})