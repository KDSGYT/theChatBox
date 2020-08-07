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
// const CORS = require('cors')()

// app.use(CORS);
// app.get('/', (req, res) => {
//     res.redirect('/api');
// })

// app.get('/api', (req, res) => {
//     res.send("<h1>KDSG</h1>")
// })

// app.post('/join/:name', (req, res) => {
//     console.log(req.params.name);
//     res.send("data has been received");
// })


io.on('connection', (socket) =>{
    console.log(`Connected: ${socket.id}`)
    socket.on('messageSent', (data) => {
        console.log(data)
        socket.broadcast.emit('messageReceived', data)
    })
    
    socket.on('disconnect', () => {
        console.log("disconnected");
    })
})






http.listen(PORT, () => console.log(`Listening on ${PORT}!!! `));

