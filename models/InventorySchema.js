const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    inventory_type:{
        type:String,
        required:true
    },
    item_name:{
        type:String,
        unique:true,
        required:true
    },
    available_quantity:{
        type:String,
        required:true
    }
})

const Inventory = mongoose.model("Inventory",inventorySchema)
module.exports  = Inventory