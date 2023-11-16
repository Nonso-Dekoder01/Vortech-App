import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import FirstLanding from './Component/FirstLanding';
import FourthLanding from './Component/FourthLanding';
import Dashboard from './Component/Dashboard';
import Page from './Component/Page';
import Resultmanagement  from './Component/Result Management';
import Resultmanagement2  from './Component/Result Management 2';
import SecondLanding  from './Component/SecondLanding';
import ThirdLanding  from './Component/ThirdLanding';
import VoteAnalsis  from './Component/VoteAnalsis';
import VoteConfiguration  from './Component/VoteConfiguration';
import VoterManagement from './Component/Voter Management/VoterManagement';
import VoterManagement2 from './Component/Voter Management/VoterManagement2';
import CandidateManagement from "./Component/CandidateManagement2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<FirstLanding/>} />
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/login' exact element={<Login/>} />
        <Route path='/dashboard' exact element={<Dashboard/>} />
        <Route path='/candidates' exact element={<CandidateManagement/>}/>
        <Route path='/fourthlanding' exact element={<FourthLanding/>} />
        <Route path='/resultmanagement' exact element={<Resultmanagement/>} />
        <Route path='/resultmanagement2' exact element={<Resultmanagement2/>} />
        <Route path='/secondlanding' exact element={<SecondLanding/>} />
        <Route path='/thirdlanding' exact element={<ThirdLanding/>} />
        <Route path='/voteanalysis' exact element={<VoteAnalsis/>} />
        <Route path='/voteconfiguration' exact element={<VoteConfiguration/>} />
        <Route path='/voteconfiguration2' exact element={<Page/>} /> 
        <Route path='/votemanagement' exact element={<VoterManagement/>} />
        <Route path='/votemanagement2' exact element={<VoterManagement2/>} />
      </Routes>
    </div>
  )
}

export default App;


