const express = require('express')
const app = express()
const WsServer=require('express-ws')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('server started');
})

app.ws('/',(ws, res)=>{
    console.log('ws connected');
    ws.on('message', (message)=>{
        console.log(message);
    })
    ws.send(`ты отправил сообщение: ${message}`)
    
})
// для ФРОНТА

// const socket = new WebSocket("ws://localhost:5000/");
//   socket.onopen = () => {
//     console.log("sock was open");
//   };
//   //принимаем сообщение с сервера
//   socket.onmessage = (event) => {
//     console.log("С сервера пришло сообщение:", event.data);
//   };
//   //отправляем сообщение на сервер

// socket.send("this is message for server");
//             console.log('click');
          