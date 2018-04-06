const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 5000;
const projectRouter = require('./projectRouter');
const actionRouter = require('./projectActions');




server.use(morgan('dev'));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', function(rec, res){
    res.json({api:'Im on fire!!!'});
})

server.listen(PORT, () => {
    console.log('API is running');
});