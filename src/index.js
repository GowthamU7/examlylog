require('../mongoboy/mongoose')
const exp=require('express')
const app=exp()
const port=process.env.PORT || 3000
const pt=require('path')
const { findOne } = require('../src/user_mongo')
require('hbs')
const user=require('../src/user_mongo')
const pub=pt.join(__dirname,'../public')

app.set('view engine','hbs')

app.use(exp.static(pub))

app.get('',(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/schecker',async(req,res)=>{
    const username=req.query.uname
    const password=req.query.upass
    const mailId=req.query.umail
    try{
        const us=new user({username,password,mailId})
        await us.save()
        res.render('checker',{msg:"yeah you succesfully registered with us",lnk:"/login",go:'tyr to login'})
    }catch(e){
        res.render('checker',{msg:"user exists",lnk:"/signup",go:'try siging in again'})
    }
})
app.get('/lchecker',async (req,res)=>{
    try{
    const us=await user.findOne({username:req.query.uname})
    if(us.password==req.query.upass){
        return res.render('success',{msg:"succesfully logged in"})}
        return res.render('success',{msg:"username/password is wrong"})
    }catch(e){
        var msg="cannot find username/password"
        return res.render('success',{msg,lnk:"/signup",mg:"try signing up"})
    }
})

app.listen(port,()=>{
    console.log('listening on port...',port)
})

