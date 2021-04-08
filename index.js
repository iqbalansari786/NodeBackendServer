const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const morgan=require('morgan')
const helmet=require('helmet')
const userRoute=require('./route/users')
const authRoute=require('./route/auth')
const app=express();


dotenv.config();
const port=process.env.PORT || 3000;

 mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,
        useUnifiedTopology: true,},()=>{
        console.log("connected")
    })


//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));





app.get('/',(req,res)=>{

    res.send("backend server ")

});

app.use('/api/user',userRoute)

app.use('/api/auth',authRoute)

app.listen(port,()=>{

    console.log("server is ready .."+port)
})