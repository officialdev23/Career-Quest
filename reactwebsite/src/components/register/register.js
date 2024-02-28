import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const Register = () =>{

    const navigate = useNavigate();
    const[user, setUser] = useState({
        name : "",
        email : "",
        age : "",
        password : "",
        reEnterPassword : ""
    })

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    //register callback
    const register = (req,res) => {
        const {name, email, password, reEnterPassword,age} = user
        if(name && email && age && password && (password === reEnterPassword)){
            // alert("posted")
            axios.post("http://localhost:9002/register",user)
            .then(res => alert(res.data.message))
        }else if(password !== reEnterPassword){
            alert("password dosen't match")
        }else{
            alert("Please enter all the details")
        }
        
    }
    return(
        <div className="register">
            <h1 className="company-name"><span>Career</span> Quest</h1>
            {console.log(user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange} required></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="text" name="age" value={user.age} placeholder="Enter your Age" onChange={handleChange}></input>
            <input type="Password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <input type="Password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/login')}>Login</div>
        </div>
    )
};

export default Register