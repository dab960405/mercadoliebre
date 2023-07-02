const express = require("express");
const app = express();
const PORT = 3000
const path = require("path");


app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, '/views/index.html');
    res.sendFile(filePath);
  });

  app.get("/login.html", (req, res) => {
    const filePath = path.join(__dirname, '/views/login.html');
    res.sendFile(filePath);
  });

  app.get("/register.html", (req, res) => {
    const filePath = path.join(__dirname, '/views/register.html');
    res.sendFile(filePath);
  });

app.listen(PORT, ()=>console.log('Escuchando en http://localhost:' + PORT))