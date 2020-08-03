const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const io = require('socket.io')();
const CORS = require('cors')()

app.use(CORS);
app.get('/', (req, res) => {
    res.redirect('/api');
})

app.get('/api', (req, res) => {
    res.send("<h1>KDSG</h1>")
})

app.post('/join/:name', (req, res) => {
    console.log(req.params.name);
    res.send("data has been received");
})




http.listen(PORT, () => console.log(`Listening on ${PORT}!!! `));

