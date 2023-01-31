const route = require("express").Router()
const Inventory = require("../models/InventorySchema")
const routes = require("./Customer")

routes.get('/inventory',async(req,res)=>{
    try {
        const inventory = await Inventory.find()
        console.log(inventory.length)
        if(inventory.length === 0){
            return res.json({
                message:"No Inventories!"
            })
        }
        res.json({
            inventory
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})
routes.get('/inventory/inventoryType',async(req,res)=>{
    try {
        const {inventory_type} = req.body
        console.log(req.body)
        const inventory = await Inventory.find({inventory_type:inventory_type})
        if(inventory.length === 0){
            return res.json({
                message:"No such kind of inventory type!",
                inventory
            })
        }
        console.log(req.body)
        res.json({
            inventory
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})


routes.post('/createInventory',async (req,res)=>{
    try {
        console.log(req.body)
        const {inventory_type,item_name,available_quantity} = req.body
        const inventory = await Inventory.findOne({item_name})
        if(inventory){
            return res.status(403).json({
                error:"Item Already Exist!"
            })
        }

        const inventories= await Inventory.create({
            inventory_type,
            item_name,
            available_quantity
        })
        console.log(inventories)
        res.json({
            inventories
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

module.exports = routes