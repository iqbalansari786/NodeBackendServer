const mongoose=require('mongoose');



const UserSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true

    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },

    password:{
        type:String,
        required:true,
        min:6,
        

    },
    profilePic:{
        type:String,
        default:"",

    },
    coverPic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }


});


module.exports=mongoose.model('User',UserSchema);