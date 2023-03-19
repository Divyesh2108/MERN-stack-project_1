require('dotenv').config()
const mongoose = require('mongoose')
 
const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_INV)
        console.log('mongodb connection successful')
    } catch (error) {
        console.log('connectin failed')
    }
}
module.exports = connectDB;