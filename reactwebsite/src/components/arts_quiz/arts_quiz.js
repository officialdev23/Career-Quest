import React from "react"
import "../homepage/homepage.css"
import { useState } from "react";
import Navbar from "../navbar"
import "../arts_quiz/arts_quiz.css"
import { useNavigate } from "react-router-dom";


const ArtsQuiz = () =>{
    const navigate = useNavigate();
    var Questionbank = [
        {
            Question: "Are you more impressed by:",
            AnswerText:[
                {Answer:"Principles" ,isCorrect: true},
                {Answer:"Emotions" ,isCorrect: false}
            ]
        },
        {
            Question: "In judging others are you more swayed by:",
            AnswerText:[
                {Answer:"Laws than circumstances" ,isCorrect: true},
                {Answer:"Circumstances than laws" ,isCorrect: false}
            ]
        },
        {
            Question: "Which appeals to you more:",
            AnswerText:[
                {Answer:"Consistency of thought" ,isCorrect: true},
                {Answer:"Harmonious human relationships" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more often:",
            AnswerText:[
                {Answer:"a cool-headed person" ,isCorrect: true},
                {Answer:"a warm-hearted person" ,isCorrect: false}
            ]
        },
        {
            Question: "Are more drawn toward the:",
            AnswerText:[
                {Answer:"Convincing" ,isCorrect: true},
                {Answer:"Touching" ,isCorrect: false}
            ]
        },
        {
            Question: "In approaching others is your inclination to be somewhat:",
            AnswerText:[
                {Answer:"Objective" ,isCorrect: true},
                {Answer:"Personal" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more comfortable in making:",
            AnswerText:[
                {Answer:"Logical judgments" ,isCorrect: true},
                {Answer:" Value judgments" ,isCorrect: false}
            ]
        },
        {
            Question: "Is it worse to be:",
            AnswerText:[
                {Answer:"unjust" ,isCorrect: true},
                {Answer:"merciless" ,isCorrect: false}
            ]
        },
        {
            Question: "In making decisions do you feel more comfortable with:",
            AnswerText:[
                {Answer:"to discuss an issue thoroughly" ,isCorrect: true},
                {Answer:"to arrive at agreement on an issue" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more:",
            AnswerText:[
                {Answer:"firm than gentle" ,isCorrect: true},
                {Answer:"gentle than firm" ,isCorrect: false}
            ]
        },
        {
            Question: "Which is more satisfying:",
            AnswerText:[
                {Answer:"to discuss an issue thoroughly" ,isCorrect: true},
                {Answer:"to arrive at agreement on an issue" ,isCorrect: false}
            ]
        },
        {
            Question: "Which rules you more:",
            AnswerText:[
                {Answer:"your head" ,isCorrect: true},
                {Answer:"your heart" ,isCorrect: false}
            ]
        },
        {
            Question: "Which is more of a compliment:",
            AnswerText:[
                {Answer:"There is a very logical person" ,isCorrect: true},
                {Answer:"There is a very sentimental person" ,isCorrect: false}
            ]
        },
        {
            Question: " Which person is more to be complimented – one of:",
            AnswerText:[
                {Answer:"clear reason" ,isCorrect: true},
                {Answer:"strong feeling" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you inclined more to be:",
            AnswerText:[
                {Answer:"fair-minded" ,isCorrect: true},
                {Answer:"Sympathetic" ,isCorrect: false}
            ]
        },
        {
            Question: "Which seems the greater error:",
            AnswerText:[
                {Answer:"to be too passionate" ,isCorrect: true},
                {Answer:"to be too objective" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you see yourself as basically:",
            AnswerText:[
                {Answer:"hard-headed" ,isCorrect: true},
                {Answer:"soft-hearted" ,isCorrect: false}
            ]
        },
        {
            Question: "Which do you wish more for yourself:",
            AnswerText:[
                {Answer:"clarity of reason" ,isCorrect: true},
                {Answer:"strength of compassion" ,isCorrect: false}
            ]
        },
        {
            Question: "Which is the greater fault:",
            AnswerText:[
                {Answer:"being indiscriminate" ,isCorrect: true},
                {Answer:"being critical" ,isCorrect: false}
            ]
        }
    ]

    /////usestate hooks

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[showScore, setShowScore] = useState(false);
    const[category,setCategory] = useState("");
    const handleAnswerResponse = (isCorrect)=>
    {
        if(isCorrect)
        {
            setScore(score+10);
        }

        const nextQuestion = currentQuestion+1;

        if(nextQuestion<Questionbank.length)
        {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
            if(score<50){
                setCategory ("T"); 
                console.log("Category T");
            }
            else{
                setCategory ("F"); 
            }
        }
    }

    const resetQuiz=()=>
    {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    const nextSession=()=>
    {
        resetQuiz();
        navigate("/test/session4")
    }

    console.log(Questionbank)
    return(
        <>
        <header>
            <Navbar/>
            {/* <Quiza/> */}
            <div className="app">
                {showScore?(
                    <div className="score-section">
                        {/* <div className="sc">You have scored {score} out of {Questionbank.length}</div> */}
                        <div className="sc">You belong to the category {category}</div>
                        <>
                            <button type="submit" onClick={nextSession}>Go to analysis</button>
                        </>
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>
                            <div className="question-text">
                                {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className="answer-section">
                            {Questionbank[currentQuestion].AnswerText.map((Answer)=>
                            (
                                <button onClick={()=>handleAnswerResponse(Answer.isCorrect)}>{Answer.Answer}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </header>

        
        </>
    )
};

export default ArtsQuiz;