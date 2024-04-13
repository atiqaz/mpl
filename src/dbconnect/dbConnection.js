const mongoose = require('mongoose')

require('dotenv').config()


const MONGO_URI =process.env.MONGO_URI

// "mongodb+srv://atiq:rahman@cluster0.p33ydg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDataBase = async () => {
    try {

        const status = await mongoose.connect(process.env.MONGO_URI ||MONGO_URI)
        console.log(`connction succsefull`)
        return status
    } catch (err) {
        console.log(`${err}`)
        return err
    }
}

module.exports = { connectDataBase }