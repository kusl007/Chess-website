const express = require("express");
const socket = require("socket.io");
const http = require("http");
const {Chess} = require("chess.js");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io =  socket(server);

const chess=new Chess();

let players={}; 
let currentPlayer="w";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index",{title:"Chess Game"});
}); 

io.on("connection", (socket) => {
    console.log("socket connection established");
    // socket.on("join", (data) => {
    //     players[socket.id] = data;
    //     socket.join("room1");
    //     if (Object.keys(players).length === 2) {
    //         io.to("room1").emit("start", players);
    //     }
    // });
})


server.listen(3000,()=>{
    console.log("listening on port 3000");
});