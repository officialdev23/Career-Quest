import React from "react"
import "./test.css"
import "../homepage/homepage.css"
import Navbar from "../navbar"

const Test = () =>{
    return(
        <>
        <header>
            <Navbar/>
            <div class="parent">
                <div class="div1">
                    <div className="box science">
                        <h3 className="heading">Science</h3>
                        <div className="btn_box">
                            <a href="http://localhost:3000/test/science" className="btn_test">Take the Test</a>
                        </div>
                    </div>
                </div>
                {/* <div class="div2">
                    <div className="box commerce">
                        <h3 className="heading">Commerce</h3>
                        <div className="btn_box">
                            <a href="http://localhost:3000/test/commerce" className="btn_test">Take the Test</a>
                        </div>
                    </div>
                </div>
                <div class="div3">
                    <div className="box arts">
                        <h3 className="heading">Arts</h3>
                        <div className="btn_box">
                            <a href="http://localhost:3000/test/arts" className="btn_test">Take the Test</a>
                        </div>
                    </div>
                </div>
                <div class="div4">
                    <div className="box arts">
                        <h3 className="heading">Arts</h3>
                        <div className="btn_box">
                            <a href="http://localhost:3000/test/session4" className="btn_test">Take the Test</a>
                        </div>
                    </div>
                </div> */}
                <div class="div5">
                    <div className="box analysis">
                        <h3 className="heading">Analysis</h3>
                        <div className="btn_box">
                            <a href="http://localhost:3000/test/analysis" className="btn_test">Take the Test</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        </>
    )
};

export default Test;