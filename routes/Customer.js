const routes = require("express").Router()
const Customer = require("../models/CustomerSchema")

routes.get('/customerDetails',async(req,res)=>{
    try {
        console.log("get customer")
        const customerDetails = await Customer.find()
        if(!customerDetails.length){
            return res.json({
                message:"No Customers!"
            })
        }
        res.json({
            customerDetails
        })
    } catch (error) {
        
    }
})
routes.post('/createCustomer',async (req,res)=>{
    try {
        console.log(req.body)
        const {customer_name,customer_email} = req.body
        const customer = await Customer.findOne({customer_email})
        if(customer){
            return res.status(403).json({
                error:"User Already Exist!"
            })
        }
        const customers = await Customer.create({
            customer_name,
            customer_email
        })
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

module.exports = routes