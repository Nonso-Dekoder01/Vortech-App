
import './App.css';
import FirstLanding from './Component/FirstLanding';
import SecondLanding from './Component/SecondLanding';
import ThirdLanding from './Component/ThirdLanding';
import FourthLanding from './Component/FourthLanding';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div>
      
    < Routes>
     <Route path="/" exact element={<FirstLanding />}/>
     <Route path="/secondlanding"  element={<SecondLanding />}/>
     <Route path="/thirdlanding"  element={<ThirdLanding />}/>
     <Route path="/fourthlanding"  element={<FourthLanding />}/>
      
     </Routes>
    </div>
  );
}

export default App;
