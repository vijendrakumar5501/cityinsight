const express=require('express')
const app=express();
const cors=require('cors')
const bodyParser = require('body-parser');
const cityRoutes=require('./routes/cityRoutes')

require('dotenv').config();
require('./models/db')
require('./models/User')
require("./models/cityModel")


const AuthRouter = require('./routes/AuthRouter');

const ProductRouter = require('./routes/ProductRouter');


const Port=process.env.process || 8000

// start karate hai 

app.get('./hy',(req,res)=>{
    res.send('')
})

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use('/auth',AuthRouter);
// app.use('/product',ProductRouter);
app.use("/api/city-details", cityRoutes);



app.listen(Port,()=>{
    console.log('server started')
})
