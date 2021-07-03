const mg=require('mongoose')

const userschema=new mg.Schema({
    username:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        validator(value){
            if(value.length<8){return new Error('not a strong password')}
        }

    },
    mailId:{
        type:String,
        unique:true
    }
})

const user=mg.model('user',userschema)

module.exports=user