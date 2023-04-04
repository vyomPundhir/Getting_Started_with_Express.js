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

app.get("/insta", (req, res)=>{
  // res.status(404).send("Hello World");
  const insta={
    userName: "vyompundhir",
    follow: 1,
    follower: 20,
  };
  res.status(200).send({insta});
});

app.get("/linkedin", (req, res)=>{
  const linkedin={
    userName: "vyompundhir",
    follow: 14,
    follower: 24,
  };
  res.status(200).json({linkedin});
  // we can write "json" in place of "send"..
});

app.get("/twitter", (req, res)=>{
  const twitter={
    userName: "vyompundhir",
    follow: 40,
    follower: 24,
  };
  res.status(200).send({twitter});
});

// listen 
app.listen(PORT, ()=>{
  console.log("Server Running");
});