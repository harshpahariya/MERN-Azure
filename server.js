require('dotenv').config();
require('./server/db-conn');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static('./client/mern_azure_example/build/'));

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: __dirname + '/client/mern_azure_example/build/'});
});

app.use('/api/thoughts/', require('./server/routes/thoughts-route'));
const {PORT} = process.env;
app.listen(PORT, () => console.log(`server running on ${PORT}`));