const express =require('express')
const router =  express.Router()
const uploadFile = require("../Multer")

const {AddPlayer,getAllPlayes,getAllPlayesById,deleteUser,uploadProfile}=require('../Controller/PlayerController')



router.post('/player/register',AddPlayer)
router.get('/player/getAllPlayers',getAllPlayes)
router.get('/player/getplayer/:userId',getAllPlayesById)
router.delete('/player/delete/:userId',deleteUser)
router.put('/player/uploadProfile/:userId',uploadFile,uploadProfile)
// router.post('/admin/login',signin)





module.exports=router