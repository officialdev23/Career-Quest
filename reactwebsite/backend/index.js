const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const token = require("../backend/token");
// const sendEmail = require("../backend/sendEmail");
// const crypto = require("crypto");
const nodemailer = require("nodemailer")
// const Jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// mongoose.connect('mongodb://127.0.0.1:27017/guidingangles',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },() =>{
//     console.log("DB connected")
// })

// mongoose.connect('mongodb+srv://aryan2310:shirodkar10@cluster0.3gp1rpu.mongodb.net/Career-Analysis?retryWrites=true&w=majority&appName=Cluster0',{
// },() =>{
//     console.log("DB connected")
// })

//new connection code
const DB = "mongodb+srv://aryan2310:shirodkar10@cluster0.3gp1rpu.mongodb.net/Career-Analysis?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set('strictQuery',true);
mongoose.connect(DB).then(()=>{
  console.log('Connection Successful');
}).catch((err)=>console.log('connnection unsuccessful', err));

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    age : Number,
    verified:{type:Boolean, default:false}
})

//creating model for schema
const User = new mongoose.model("user",userSchema)

app.post("/login",(req,res) => {
    const {email, password} = (req.body)
    //res.send("Guiding Angles")
    User.findOne({email : email}, (err,user)=>{
        if(err)
        {
            res.send(err)
        }
        if(user)
        {
            if(password == user.password)
            {
                res.send({message : "Login successful, click login to enter", user : user, flag : "1"})
            }
            else
            {
                res.send({message : "Password did not match "})
                
            }
        }
        else
        {
            res.send({message : "User dosent exist"})
            //alert("user does'nt exist")
        }
    })
})

app.post("/register",(req,res) => {
    const {name, email, password, age} = (req.body)
    User.findOne({email : email}, (err,user)=>{
        if(err)
        {
            res.send(err)
        }
        if(user)
        {
            res.send({message : "User already exists. Kindly login"})
            //alert("User already exists. Kindly login")
        }
        else
        {
            const user = new User({
            name : name,
            email : email,
            password : password,
            age : age
            })
            user.save(async err => {
            if(err)
            {
                res.send(err)
            }
            else
            {

                let mailTransporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        // user: 'guidinganglea@gmail.com',
                        // pass: 'pcumhmusajehcabt'
                        user: 'careerquest10@gmail.com',
                        pass: 'ealm fcwn jxdj ruvn'
                    }
                });
                 
                let mailDetails = {
                    from: 'careerquest10@gmail.com',
                    to: user.email,
                    subject: 'Congatulations Your Bright Future is Here',
                    text: 'We are thrilled to extend a warm welcome to you on behalf of CAREER QUEST! We are excited to have you as a part of our team and look forward to working with you. As you settle in, please take some time to familiarize yourself with our culture, values, and goals. We are committed to creating a collaborative and supportive environment where everyone can thrive and achieve their full potential. We are confident that your skills, experience, and unique perspective will contribute to our success as we work towards our shared objectives. If you have any questions or concerns, please do not hesitate to reach out to us or any member of our team. We are here to support you every step of the way. Once again, welcome aboard! We look forward to getting to know you better and achieving great things together. Best regards,'
                };
                 
                mailTransporter.sendMail(mailDetails, function(err, data) {
                    if(err) {
                        console.log('Error Occurs');
                    } else {
                        console.log('Email sent successfully');
                        alert("Email Sent Successfully");
                    }
                });
                res.send({message: "sucessfully registered. Kindly login"})
                
              //  alert("Sucessfully")
            }
            })
        }
    })
    
})

app.listen(9002,() => {
    console.log("Its working")
})