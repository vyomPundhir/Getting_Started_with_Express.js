// Bring
const express = require("express")
// assign
const app = express()
// port
const PORT = 3000

// Route
app.get("/", (req, res)=>{
  res.send("<h1>hello full stack web dev JavaScript</h1>");
});

app.get("/insta", ()=>{
  res.status(404).send("Hello World");
});

// listen 
app.listen(PORT, ()=>{
  console.log("Server Running");
});