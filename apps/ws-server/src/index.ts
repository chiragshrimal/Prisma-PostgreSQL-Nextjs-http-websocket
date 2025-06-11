// in this file we are also pushing data into the database 
import { WebSocketServer } from "ws";
import {client} from "@repo/db/client";

const server = new WebSocketServer({
    port : 3001
})

server.on("connection",(socket)=>{
    client.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to the server ");
})