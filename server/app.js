const express = require('express');
const env = require('dotenv');
//const {JWT_SECRET} = require('./keys');
const app = express();
const PORT = 2000
//const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const path = require("path");
const cors = require("cors");


//const {MONGOURI} = require('./keys')
mongoose.connect("mongodb://localhost/commerce",{useNewUrlParser:true});


//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData');
const pageRoutes = require('./routes/admin/page');
const addressRoutes = require('./routes/address');
const orderRoutes = require('./routes/order');
const adminOrderRoute = require('./routes/admin/order.routes');


//environment variables or you can say constants
env.config();
//mongodb+srv://nikhila:<password>@cluster0.zauji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// mongoose.connect(MONGOURI,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true

// })
// mongoose.connection.on('connected',()=>{
//     console.log("conneted to mongo yeahhoo")
// })
// mongoose.connection.on('error',(err)=>{
//     console.log("err connecting",err)
// })


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname,"uploads")));
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes);
app.use('/api',pageRoutes);
app.use('/api',addressRoutes);
app.use('/api',orderRoutes);
app.use('/api',adminOrderRoute);




//app.use(bodyParser());



app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

// const express=require('express')
// const connectdata=require('./keys');
// const app=express()

// connectdata();
// const PORT=2000;

// app.listen(PORT,()=>{
//         console.log("server is running on",PORT)
//     })