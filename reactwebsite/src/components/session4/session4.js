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
            Question: "Do you prefer to work:",
            AnswerText:[
                {Answer:"To deadlines" ,isCorrect: true},
                {Answer:"Just “whenever”" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more:",
            AnswerText:[
                {Answer:"Punctual" ,isCorrect: true},
                {Answer:"Leisurely" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you want things:",
            AnswerText:[
                {Answer:"Settled and decided" ,isCorrect: true},
                {Answer:"Unsettled and undecided" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you tend to choose:",
            AnswerText:[
                {Answer:"Rather carefully" ,isCorrect: true},
                {Answer:"Somewhat impulsively" ,isCorrect: false}
            ]
        },
        {
            Question: "Does it bother you more having things:",
            AnswerText:[
                {Answer:"Incomplete" ,isCorrect: true},
                {Answer:"Completed" ,isCorrect: false}
            ]
        },
        {
            Question: "Would you say you are more:",
            AnswerText:[
                {Answer:"Serious and determined" ,isCorrect: true},
                {Answer:"Easy-going" ,isCorrect: false}
            ]
        },
        {
            Question: "Should one usually let events occur:",
            AnswerText:[
                {Answer:"by careful selection and choice" ,isCorrect: true},
                {Answer:"randomly and by chance" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you feel better about:",
            AnswerText:[
                {Answer:"having purchased" ,isCorrect: true},
                {Answer:"having the option to buy" ,isCorrect: false}
            ]
        },
        {
            Question: "Which is more admirable",
            AnswerText:[
                {Answer:"the ability to organize and be methodical" ,isCorrect: true},
                {Answer:"the ability to adapt and make do" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you put more value on:",
            AnswerText:[
                {Answer:"infinite" ,isCorrect: true},
                {Answer:"open-minded" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more comfortable with work that is:",
            AnswerText:[
                {Answer:"contracted" ,isCorrect: true},
                {Answer:"done on a casual basis" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you tend to look for:",
            AnswerText:[
                {Answer:"the orderly" ,isCorrect: true},
                {Answer:"whatever turns up" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you more often prefer the",
            AnswerText:[
                {Answer:"final and unalterable statement" ,isCorrect: true},
                {Answer:"tentative and preliminary statement" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more comfortable:",
            AnswerText:[
                {Answer:"after a decision" ,isCorrect: true},
                {Answer:"before a decision" ,isCorrect: false}
            ]
        },
        {
            Question: "Is it preferable mostly to:",
            AnswerText:[
                {Answer:"make sure things are arranged" ,isCorrect: true},
                {Answer:"just let things happen" ,isCorrect: false}
            ]
        },
        {
            Question: "In relationships should most things be:",
            AnswerText:[
                {Answer:"re-negotiable" ,isCorrect: true},
                {Answer:"random and circumstantial" ,isCorrect: false}
            ]
        },
        {
            Question: "Which situation appeals to you more:",
            AnswerText:[
                {Answer:"the structured and scheduled" ,isCorrect: true},
                {Answer:"the unstructured and unscheduled" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you a person that is more:",
            AnswerText:[
                {Answer:"routinized than whimsical" ,isCorrect: true},
                {Answer:"whimsical than routinized" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you prefer the:",
            AnswerText:[
                {Answer:"planned event" ,isCorrect: true},
                {Answer:"unplanned event" ,isCorrect: false}
            ]
        },
        {
            Question:  "Do you tend to be more:",
            AnswerText:[
                {Answer:"deliberate than spontaneous" ,isCorrect: true},
                {Answer:"spontaneous than deliberate" ,isCorrect: false}
            ]
        },
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
            if(score>50){
                setCategory ("J"); 
                console.log("Category I");
            }
            else{
                setCategory ("P"); 
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
        navigate("/test/analysis")
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