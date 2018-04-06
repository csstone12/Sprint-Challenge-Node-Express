const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const port = 5000;
const projectRouter = require('./projectRouter');
const projectActions = require('./projectActions');




server.use(morgan('dev'));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/actions', projectActions);
server.use('/api/projects', projectRouter);

server.get('/', function(rec, res){
    res.json({api:'Im on fire!!!'});
})

server.listen(port, () => {
    console.log('API is running');
});