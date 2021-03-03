

const express = require('express');

const app = express();

const port = 8080;

const host = 'localhost';

app.use('/', express.static('dis'));
app.use('/*', (req, res) => res.sendFile(path.resolve('public/index.html')));


app.listen(port, host, ()=> {
    console.log('server started!', port, host)
});

