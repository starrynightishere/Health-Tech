const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lucky:lucky123@cluster0.p2bnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log(err);
})