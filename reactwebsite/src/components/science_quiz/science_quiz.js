import React from "react"
import { useState } from "react"
import "../homepage/homepage.css"
import Navbar from "../navbar"
import "../science_quiz/science_quiz.css"
import {useNavigate } from 'react-router-dom';
import { NavLink} from "react-router-dom";

const ScienceQuiz = () =>{
    const navigate = useNavigate();
    var Questionbank = [
        {
            Question: "At a party do you:",
            AnswerText:[
                {Answer:"Interact with many people including the strangers" ,isCorrect: true},
                {Answer:" Interact with a very few people which are known to you" ,isCorrect: false}
            ]
        },
        {
            Question: "At parties do you:",
            AnswerText:[
                {Answer:"Stay late" ,isCorrect: true},
                {Answer:"Leave early" ,isCorrect: false}
            ]
        },
        {
            Question: "In your social groups do you",
            AnswerText:[
                {Answer:"Keep abreast of others happenings" ,isCorrect: true},
                {Answer:" Get behind on the news" ,isCorrect: false}
            ]
        },
        {
            Question: "In phoning do you:",
            AnswerText:[
                {Answer:"Rarely question that it will be all said" ,isCorrect: true},
                {Answer:"Rehearse what you will have to say" ,isCorrect: false}
            ]
        },
        {
            Question: " In a company do you",
            AnswerText:[
                {Answer:"Initiate the conversation" ,isCorrect: true},
                {Answer:"Wait to be approached" ,isCorrect: false}
            ]
        },
        {
            Question: "Does new and non-routine interaction with others:",
            AnswerText:[
                {Answer:"Stimulate and energise you" ,isCorrect: true},
                {Answer:"tax your reserves" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you prefer:",
            AnswerText:[
                {Answer:"many friends with brief contact" ,isCorrect: true},
                {Answer:"a few friends with more lengthy contact" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you:",
            AnswerText:[
                {Answer:"speak easily and at length with strangers" ,isCorrect: true},
                {Answer:"find little to say to strangers" ,isCorrect: false}
            ]
        },
        {
            Question: "When the phone rings do you:",
            AnswerText:[
                {Answer:"hasten to get to it first" ,isCorrect: true},
                {Answer:"hope someone else will answer " ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more inclined to be",
            AnswerText:[
                {Answer:"easy to approach" ,isCorrect: true},
                {Answer:"somewhat reserved" ,isCorrect: false}
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
                setCategory ("E"); 
                console.log("Category I");
            }
            else{
                setCategory ("I"); 
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
        navigate("/test/commerce")
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
                            <button type="submit" onClick ={nextSession} component={NavLink}>Move to next section</button>
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

export default ScienceQuiz;