const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:wisdom15@ds129762.mlab.com:29762/wisdomdb',{
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('connected to database')
}).catch(() => {
    console.log('failed to connect to database')
})