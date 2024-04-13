const Player = require('../Schema/Player')


exports.AddPlayer = async (req, res) => {
    try {


        const { firstname, lastname, phone, email, role } = req.body
        console.log(req.body)

        if (!firstname) {
            return res.status(400).json({ error: "Name is Rquired" })
        }
        if (!phone) {
            return res.status(400).json({ error: "Phone is Rquired" })
        } 
        if (!email) {
            return res.status(400).json({ error: "Email is Rquired" })
        }
        if (!role) {
            return res.status(400).json({ error: "Player Role is Rquired" })
        }

        const userAvail = await Player.findOne({ phone })
        console.log(userAvail)
        if (userAvail) {
            return res.status(400).json({ error: "Player Already Registered" })
        }
        // console.log(req)
        const newprod = new Player({
            firstname, lastname, phone, email, role, profilePicture: ""
        })

        const addedProd = await newprod.save()
        try {
            if (addedProd) {
                // console.log(addedProd)
                res.status(201).json({ message: "Player Registered Successfully", players: addedProd })
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

exports.getAllPlayes = async (req, res) => {
    try {
        const playerData = await Player.find()
        if (playerData) {
            res.status(200).json({ message: "Player fetched Successfully", players: playerData })
        } else {
            res.status(200).json({ message: "No Players Found", players: playerData })
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` })

    }
}
exports.getAllPlayesById = async (req, res) => {
    try {
        const { userId } = req.params
        const playerData = await Player.findOne({ _id: userId })
        if (playerData) {
            res.status(200).json({ message: "Player fetched Successfully", player: playerData })
        } else {
            res.status(200).json({ message: "No Players Found", player: playerData })
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` })

    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const playerData = await Player.findByIdAndDelete(userId);

        if (playerData) {
            res.status(200).json({ message: "Player Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Player Not Found" });
        }
    } catch (error) {
        res.status(400).json({ error: `Something Went Wrong ${error.message}` });
    }
};
exports.uploadProfile = async (req, res) => {
    try {
        // Assuming req.file.path contains the URL of the uploaded image
        const { userId } = req.params;
        const profileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
        console.log(profileUrl)
        console.log(userId)

        // Update the document in the database with the profile URL
        const updatedDocument = await Player.findByIdAndUpdate(userId, { profileUrl: profileUrl }, { new: true });

        if (!updatedDocument) {
            return res.status(404).json({ error: 'Document not found' });
        }
        console.log(updatedDocument)

        res.json({ message: 'Profile URL added successfully', profileUrl: updatedDocument.profileUrl });
    } catch (err) {
        console.error('Error updating document:', err);
        return res.status(500).json({ error: 'Error updating document' });
    }
};