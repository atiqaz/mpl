const User = require('../Schema/Auth')
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.addUser = async (req, res) => {
    try {

        const { name, email, phone, password, role, age, teamName } = req.body
        console.log(req.body)
        if (!phone) {
            return res.status(400).json({ error: "Phone is Rquired" })
        }

        const userAvail = await User.findOne({ phone })
        console.log(userAvail)
        if (userAvail) {
            return res.status(400).json({ error: "User Already Registered" })
        }
        // console.log(req)
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newprod = new User({
            name, email, phone, password: hash, role, age, teamName
        })

        const addedProd = await newprod.save()
        try {
            if (addedProd) {
                // console.log(addedProd)
                res.status(201).json({ message: "User Registered Successfully", Users: addedProd })
            }
            else {
                res.status(400).json({ err: "something went wrong" })
            }
        } catch (error) {
            res.status(400).json({ err: "product  " })
        }
    } catch (error) {
        res.status(400).json({ err: error })
    }
    // res.status(200).json({ file: req.files, body: req.body })
}

exports.getAllUsers = async (req, res) => {
    try {
        const UserData = await User.find()
        if (UserData) {
            res.status(200).json({ message: "User fetched Successfully", Users: UserData })
        } else {
            res.status(200).json({ message: "No Users Found", Users: UserData })
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` })

    }
}
exports.getUsersById = async (req, res) => {
    try {
        const { userId } = req.params
        const UserData = await User.findOne({ _id: userId })
        if (UserData) {
            res.status(200).json({ message: "User fetched Successfully", User: UserData })
        } else {
            res.status(200).json({ message: "No Users Found", User: UserData })
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` })

    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const UserData = await User.findByIdAndDelete(userId);

        if (UserData) {
            res.status(200).json({ message: "User Deleted Successfully" });
        } else {
            res.status(404).json({ message: "User Not Found" });
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` });
    }
};