import React from "react";
import Navbar from "../navbar"
import "../homepage/homepage.css"
import "./about.css"

const About = () =>{
    return(
        <header>
            <Navbar/>
            <div className="wrappe">
                <div className="row">
                    <div className="conten">
                        <h1>About The Team</h1>
                        <h2>Meet Your Guides</h2>
                        <p>The <span>GUIDES</span> are a team of dedicated professionals work tirelessly to guide and mentor young individuals as they navigate the complex world of career development. These individuals come from a variety of backgrounds, including education, business, and counseling, and they use their expertise to provide tailored support to each and every youth they work with. From resume building to interview preparation, this team provides the tools and resources needed for success, and they are passionate about helping young people find fulfillment and success in their chosen careers. Whether through one-on-one counseling sessions, group workshops, or online resources, this team is a trusted and invaluable resource for youth on their journey towards a successful career.</p>
                    </div>
                </div>
            </div>
        </header>
        
    );
}

export default About;