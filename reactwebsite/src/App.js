// if cloning from github 1st run the following code :- npm install react-scripts --save  this will 
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Test from './components/test/test';
import ScienceQuiz from './components/science_quiz/science_quiz';
import CommerceQuiz from './components/commerce_quiz/commerce_quiz';
import ArtsQuiz from './components/arts_quiz/arts_quiz';
import Analysis from './components/analysis/analysis';
import About from './components/about/about';
import Session4 from './components/session4/session4';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
//import { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom" ;

function App() {

  //const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element ={<Homepage/>}/>
          <Route path='/login' element = {<Login/>} />
          <Route path='/' element = {<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/test/science" element={<ScienceQuiz/>}/>
          <Route path="/test/commerce" element={<CommerceQuiz/>}/>
          <Route path="/test/arts" element={<ArtsQuiz/>}/>
          <Route path="/test/session4" element={<Session4/>}/>
          <Route path="/test/analysis" element={<Analysis/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
