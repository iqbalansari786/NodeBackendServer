const { route } = require('./users');
const User=require('../model/User')

const bcrypt=require('bcrypt');


const router=require('express').Router();






//register

router.post('/register',async (req,res)=>{
   

    try{
        const salt=await bcrypt.genSalt(10);
        const hashPassowrd=await bcrypt.hash(req.body.password,salt)
        const user=new User({

            username:req.body.username,
            email:req.body.email,
            password:hashPassowrd
        });

       const newUser= await user.save();
       res.status(200).json(newUser);

    }
    catch(err)
    {
        console.log(err)

    }



});

//login


router.post('/login',async (req,res)=>{

try{
    const user=await User.findOne({email:req.body.email});
    !user && res.status(404).send('user not found !');
    const validPassword= await bcrypt.compare(req.body.password,user.password);
    !validPassword && res.status(400).send('wrong password');

    res.status(200).json(user);

}
catch(err)
{
    console.log(err)
    res.status(500).json(err)
}
});
































module.exports=router