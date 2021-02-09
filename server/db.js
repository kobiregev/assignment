const mongoose = require('mongoose')
const url = 'mongodb://localhost/homeassigment'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error('Connection error:', error))
db.once('open', () => {
    console.log('connected to database on mongodb.')
})