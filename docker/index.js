import express from "express";
 const app = express();
 const port = 3000;

 app.use(express.json());
 app.get("/",(req, res) => { 
    res.send("Welcome to my World!! This is my first docker assignment!!")
 });
 app.listen(() => {
    console.log(`server is listening on port ${port}`);
 });