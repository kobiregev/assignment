const { Schema, model } = require('mongoose')
const userSchema = new Schema({
    username: String,
    password: String,
    addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
})
const User = model('User', userSchema)
module.exports = User