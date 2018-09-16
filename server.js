const express = require('express');
const upload = require('./upload');
const download = require('./download');
const deletefile = require('./deletefile');
const cors = require('cors');

const server = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

var publicDir = require('path').join(__dirname,'/data');
server.use('/resources', express.static(publicDir));

server.post('/upload', upload);
server.get('/download', download);
server.delete('/deletefile', deletefile);

server.listen(8000, () => {
    console.log('Server started!');
});