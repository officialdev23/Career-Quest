import React, {useState}from "react"
import "./login.css"
import axios from "axios"
import { useNavigate} from "react-router-dom";


const Login = () =>{

    const navigate = useNavigate()


    const[user, setUser] = useState({
        email : "",
        password : ""
    })

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login =() => {
    //     axios.post("http://localhost:9002/login",user)
    //     .then(res=>alert(res.data.message))
    // }
    var flag = "0";

    const auth =() => {
        axios.post("http://localhost:9002/login",user)
        .then(res=>{alert(res.data.message)})

        axios.post("http://localhost:9002/login",user)
        .then(res=>{flag = (res.data.flag)})

        console.log(flag)
        if(flag === "1")
        {
            navigate("/home")
            flag = 0;
        }

    }

    return(
        <div className="login">
            <h1 className="company-name"><span>Career</span> Quest</h1>
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter you Login Id/Email" onChange={handleChange}></input>
            <input type="Password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}></input>
            <div className="button" onClick={auth} >Login</div>
            <div>OR</div>
            {/* <div className="button" onClick={login} >Login</div>
            <div>or</div> */}
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
};

export default Login