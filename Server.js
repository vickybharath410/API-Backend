const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const App = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const PORT = process.env.PORT || 4000
const customerRouter = require("./routes/Customer")
const inventoryRouter = require("./routes/Inventory")

App.use(bodyParser.json())

App.use("/api",customerRouter)
App.use("/api",inventoryRouter)


mongoose.connect(process.env.MONGODB_URl)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((error)=>{
        console.log(error.message)
    })
App.listen(PORT,()=>console.log(`Server started at port: http//localhost:${PORT}`))