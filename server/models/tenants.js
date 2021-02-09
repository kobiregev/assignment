const { Schema, model } = require('mongoose')
const tenantSchema = new Schema({
    name: String,
    address: { type: Schema.Types.ObjectId, ref: 'Address' },
    phoneNumber: String,
    debt: Number
})
const Tenant = model('Tenant', tenantSchema)
module.exports = Tenant