const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;

const io = require('socket.io')(http, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});


io.on('connection', (socket) => {
    console.log(`Connected: ${socket.id}`)
    socket.on('messageSent', (data) => {
        console.log(data)
        socket.broadcast.emit('messageReceived', data)
    })

    socket.on('create-room',() =>{
        socket.join('room', () => {
            // console.log();
            let rooms = Object.keys(socket.rooms)
            console.log(rooms);
        })
    })

    socket.on('joing-room', () => {
        socket.join('room')
    })

    socket.on('disconnect', () => {
        console.log("disconnected", socket.id);
    })
})






http.listen(PORT, () => console.log(`Listening on ${PORT}!!! `));

