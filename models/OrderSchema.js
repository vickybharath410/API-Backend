const mongoose = require("mongoose")

const ordersSchema = mongoose.Schema({
    
    item_name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    customer_id:{
        type:mongoose.Types.ObjectId,
        ref:"Customer",
        required:true
    },
    inventory_id:{
        type:mongoose.Types.ObjectId,
        ref:"Inventory",
        required:true
    },
})

const Orders = mongoose.model("Orders",customerSchema)
module.exports = Orders