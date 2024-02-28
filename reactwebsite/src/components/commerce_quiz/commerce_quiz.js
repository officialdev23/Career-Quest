import React from "react"
import { useState } from "react"
import "../homepage/homepage.css"
import Navbar from "../navbar"
import "../commerce_quiz/commerce_quiz.css"
import { useNavigate } from "react-router-dom"


const CommerceQuiz = () =>{
    const navigate = useNavigate();
    var Questionbank = [
        {
            Question: "Are you more:",
            AnswerText:[
                {Answer:"Realistic than speculative" ,isCorrect: true},
                {Answer:"Speculative than realistic" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more attracted to:",
            AnswerText:[
                {Answer:"Sensible people" ,isCorrect: true},
                {Answer:"Imaginative people" ,isCorrect: false}
            ]
        },
        {
            Question: "In doing ordinary things are you more likely to:",
            AnswerText:[
                {Answer:"Do it the usual way" ,isCorrect: true},
                {Answer:"Do it your own way" ,isCorrect: false}
            ]
        },
        {
            Question: "Facts:",
            AnswerText:[
                {Answer:"Speak for themselves" ,isCorrect: true},
                {Answer:"Illustrate principles" ,isCorrect: false}
            ]
        },
        {
            Question: "Is it worse to:",
            AnswerText:[
                {Answer:"Have your “head in the clouds”" ,isCorrect: true},
                {Answer:"Be “in a rut”" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more interested in:",
            AnswerText:[
                {Answer:"What is actual" ,isCorrect: true},
                {Answer:"What is possible" ,isCorrect: false}
            ]
        },
        {
            Question: "Writers should:",
            AnswerText:[
                {Answer:"Say what they mean and mean what they say" ,isCorrect: true},
                {Answer:"Express things more by use of analogy" ,isCorrect: false}
            ]
        },
        {
            Question: "Are visionaries",
            AnswerText:[
                {Answer:"somewhat annoying" ,isCorrect: true},
                {Answer:"rather fascinating" ,isCorrect: false}
            ]
        },
        {
            Question: "Common sense is",
            AnswerText:[
                {Answer:"rarely questionable" ,isCorrect: true},
                {Answer:"frequently questionable" ,isCorrect: false}
            ]
        },
        {
            Question: "Children often do not:",
            AnswerText:[
                {Answer:"make themselves useful enough" ,isCorrect: true},
                {Answer:"exercise their fantasy enough" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more frequently:",
            AnswerText:[
                {Answer:"a practical sort of person" ,isCorrect: true},
                {Answer:"a fanciful sort of person" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more likely to:",
            AnswerText:[
                {Answer:"see how others are useful" ,isCorrect: true},
                {Answer:"see how others see" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you go more by:",
            AnswerText:[
                {Answer:"facts" ,isCorrect: true},
                {Answer:"Principles" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more interested in:",
            AnswerText:[
                {Answer:"production and distribution" ,isCorrect: true},
                {Answer:"design and research" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you more likely to trust your:",
            AnswerText:[
                {Answer:"experience" ,isCorrect: true},
                {Answer:"Hunch" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you feel:",
            AnswerText:[
                {Answer:"more practical than ingenious" ,isCorrect: true},
                {Answer:"more ingenious than practical" ,isCorrect: false}
            ]
        },
        {
            Question: "Do you prize more in yourself:",
            AnswerText:[
                {Answer:"a strong sense of reality" ,isCorrect: true},
                {Answer:"a vivid imagination" ,isCorrect: false}
            ]
        },
        {
            Question: "Are you drawn more to:",
            AnswerText:[
                {Answer:"fundamentals" ,isCorrect: true},
                {Answer:"Overtones" ,isCorrect: false}
            ]
        },
        {
            Question: "In writings do you prefer:",
            AnswerText:[
                {Answer:"the more literal" ,isCorrect: true},
                {Answer:"the more figurative" ,isCorrect: false}
            ]
        },
        {
            Question: "Is it harder for you to:",
            AnswerText:[
                {Answer:"identify with others" ,isCorrect: true},
                {Answer:"utilize others" ,isCorrect: false}
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
            if(score>50){
                setCategory ("S"); 
                console.log("Category S");
            }
            else{
                setCategory ("N"); 
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
        navigate("/test/arts")
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
                            <button type="submit" onClick={nextSession}>Move to next Session</button>
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

export default CommerceQuiz;