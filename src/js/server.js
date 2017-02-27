/**
 * Created by Owner on 2/26/2017.
 */
const http = require("http");
const express = require("express");
const path = require("path");
const PORT = process.env.NODE || 8080;
const INDEX = path.join(__dirname,"src","index.html");
const ROOT = path.join(__dirname,"src");
const app = express();
const server = http.createServer(app);
app.use(express.static(ROOT));
app.get((req,res)=>{
    res.sendFile(INDEX);
});
server.listen(PORT);