const { Schema, model } = require('mongoose')
const addressSchema = new Schema({
    address: String,
    tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }]
})
const Address = model('Address', addressSchema)
module.exports = Address
//addresses