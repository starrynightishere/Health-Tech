const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./dbs/connection");
const User = require("./dbs/userSchema");

const staticpath = path.join(__dirname,"../frontend");
console.log(staticpath);

app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.post("/appointment",async (req,res)=>{
    console.log(req.body);
    try {
    
      const {name, email, phone, date, department, doctor, message} = req.body
    
        const data = new User({
            name, email, phone, date, department, doctor, message
        })

        const result = await data.save();
        console.log(result);
        res.status(201).json(data);
        
    } catch (error) {
        console.log(error);
    }

})

app.get("/",(req,res)=>{
    res.send("hellow form backend");
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})