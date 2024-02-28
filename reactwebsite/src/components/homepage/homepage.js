import React from "react"
import "./homepage.css"
//import { useNavigate } from "react-router-dom";
import Pic from "./img/img1.png"
import Navbar from "../navbar";

const Homepage = () =>{
   // const navigate = useNavigate();
    return(
        <>
            <header>
                <Navbar/>
                <div className="main-content">
                    <div className="text">
                        <h2 className="info"><span>We Guide Today </span>For Better Tomorrow</h2>
                        <a href="http://localhost:3000/test" className="btn2">Take the Test</a>
                    </div>
                    <div className="img">
                        <img src={Pic} alt="" />
                    </div>
                </div>
                {/* <div className="link">
                    <ul>
                        <li><i class="fa-brands fa-youtube"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                    </ul>
                </div> */}
            </header>
        </>
    )
};

export default Homepage