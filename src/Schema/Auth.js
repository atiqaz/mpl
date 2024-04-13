const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userModel = mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
    },
    password:{
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,

    },
    age: {
        type: String,

    },
    teamName: {
        type: String,

    },
    profilePicture: {
        type: String
    }

}, { timestamps: true })




module.exports = mongoose.model('Users', userModel)