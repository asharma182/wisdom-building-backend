const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose')
const userRoutes = require('./router/user')

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(userRoutes)

app.listen(port, () => {
    console.log('server is up on ' + port);
})

