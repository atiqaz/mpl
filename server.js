const express = require('express');
const app = express();
require('dotenv').config()
const path =require('path')
var cors = require('cors')




app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')));
// const serveBuild =express.static(path.join())
const PORT =process.env.PORT || 4000
// -----------------addingRoutes---------------------------------------------------------
const Players= require('../server/src/Routes/PlayerRoutes')
const user= require('../server/src/Routes/UserRoutes')


app.use('/api',Players)
app.use('/api/user',user)

// -------------------------deployment------------------
const dir1=path.resolve()

const isLive = process.env.PRODUCTION
if (isLive==="LIVE"){
  app.use(express.static(path.join(dir1,"Client/dist")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dir1,"Client","dist","index.html"));

  })
  app.get('/', (req, res) => {
    res.send('working on live!');
  });
}else{
  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
}


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const db= require('../server/src/dbconnect/dbConnection')
db.connectDataBase()