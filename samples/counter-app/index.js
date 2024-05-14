import express from "express";
 const app = express();
 const port = 3000;

 app.use(express.json());
 app.get("/",(req, res) => { 
    res.send("Welcome to my World!!")
 });
 app.listen(() => {
    console.log(`server is listening on port ${port}`);
 });