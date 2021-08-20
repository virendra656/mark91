const express = require('express')
const cors = require('cors')
const app = express()

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTION');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('credentials', 'true');
    next();
}

app.use(allowCrossDomain);

const datas = {};
app.post('*', (req, res) => {
    res.json({ "status": { "message": "Invalid session ID", "code": "200" } }
    )
})

app.get('*', (req, res) => {
    res.json({ "status": { "message": "Invalid session ID", "code": "200" } }
    )
})

module.exports = app;