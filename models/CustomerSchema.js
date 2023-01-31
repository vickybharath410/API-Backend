const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    
    customer_name:{
        type:String,
        required:true
    },
    customer_email:{
        type:String,
        unique : true,
        required:true
    }
})

const Customer = mongoose.model("Customer",customerSchema)
module.exports  = Customer