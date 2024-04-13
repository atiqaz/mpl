const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Players = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,

    },

    email: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,

    },
    profileUrl: {
        type: String
    }

}, { timestamps: true })


// userModel.virtual('password').set(function (password) {
//     this.hash_password = bcrypt.hashSync(password, 10)
// });
// userModel.methods = {
//     authenticate: function (password) {
//         return bcrypt.compareSync(password, this.hash_password)
//     }
// }

module.exports = mongoose.model('Players', Players)