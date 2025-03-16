const authRoutes=require("./routes/auth.route")
const sellerRoutes=require("./routes/seller.route")

const express = require('express');
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config();


const port=7000

const cors=require("cors");
const { signup, login } = require("./controllers/auth.controller");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

app.use(cors(corsOptions)) 
app.use("/api/auth",authRoutes)
app.use("/api/upload",sellerRoutes)


app.listen(port,()=>{
    console.log(`Listening at Port: ${port}`)
})



















