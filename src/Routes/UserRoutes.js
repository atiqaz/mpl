const express =require('express')
const router =  express.Router()

const {addUser,getAllUsers,getUsersById,deleteUser}=require('../Controller/UserController')
const {loginUser}=require('../Controller/Auth')



router.post('/register',addUser)
router.get('/getusers',getAllUsers)
router.get('/getusers/:userId',getUsersById)
router.delete('/delete/:userId',deleteUser)

router.post('/login',loginUser )

// router.post('/admin/login',signin)





module.exports=router