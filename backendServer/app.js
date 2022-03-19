const express=require("express");
const port=4000;
const app=express();
app.use(express.json());


app.get("/eventAtDate/:text",async(req,res)=>{
    try{
       //Find the text
     let text=(req.params.text);
     // Reverse the text
   let  newText=text.split("").reverse();
     // Return the text after after text length time
     set=setTimeout(()=>{
        res.status(201).send(newText);
     },(newText.length)*1000)
     
    }
    catch(err){
       // Return the error if any
       res.status(400).send(err);
    }
   
});

// Listening the server
app.listen(port,async()=>{
console.log("running at port no 4000");
});