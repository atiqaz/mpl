var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
const bcrypt = require('bcrypt');
const Saltkey= process.env.SALTKEY
const saltRounds = 10;

const user = require('../Schema/Auth')


exports.loginUser = async (req, res) => {
    try {


        const { phone,password} = req.body
        console.log(req.body)
        if (!phone) {
            return res.status(400).json({ error: "Phone is Rquired" })
        }
      

        const userAvail = await user.findOne({ phone })
      
        console.log(userAvail)
        if (userAvail) {
            const{avEmail,role}=userAvail
            const passtrue= await bcrypt.compare(password, userAvail.password);
            if(passtrue){
               
                var token = jwt.sign({ phone,avEmail,role }, Saltkey);

                return res.status(200).json({ message: "logged In", token,user:userAvail })
            }else{
                return res.status(400).json({ error: "Invalid Credentials" })
            }
           
        }else{
            return res.status(400).json({ error: "Invalid Credentials" })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ err: error })
    }
    // res.status(200).json({ file: req.files, body: req.body })
}



