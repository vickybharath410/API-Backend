const routes = require("express").Router()
const Orders = require("../models/OrderSchema")
const Inventory = require("../models/InventorySchema")

routes.get('/',async(req,res)=>{
    try {
        const orders = await Orders.find()
        if(!orders.length){
            return res.json({
                message:"No Orders!"
            })
        }
        res.json({
            orders
        })

    } catch (error) {
        
    }
})

routes.post('/',async (req,res)=>{
    try {
        const {item_name,customer_id,quantity,inventory_id} = req.body
        const order = await Orders.create({
            item_name,
            customer_id,
            quantity,
            inventory_id
        })
        const invetory = await Inventory.findOne({item_name})
        invetory.available_quantity = parseInt(invetory.available_quantity) - quantity
        if(!invetory.available_quantity){
            invetory.available_quantity = "Item outof stock"
        }
        await invetory.save()
        console.log(invetory)
        res.json({
            message:"Order Created",
            order
        })

    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})