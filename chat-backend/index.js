const express = require('express');
const config = require('./config/app')
const router = require('./router')
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

// START SERVER
const port = config.appPort
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})