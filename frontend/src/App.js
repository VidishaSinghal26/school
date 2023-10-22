import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import HomeScreen from './Screens/HomeScreen';
import Workshop from './Screens/Workshop';
import Footer from './Components/Footer';

import AimsObjectives from './Components/home/AimsObjectives';
import MissionStatement from './Components/home/MissionStatement';
import SchoolComunity from './Components/home/SchoolComunity';
import WordForParent from './Components/home/WordForParent';
import Contact from './Screens/Contact'
import Legacy from './Components/home/Legacy';
import Infra from './Components/academics/Infra';
import facilities from './Components/academics/facilities';
import curriculum from './Components/academics/curriculum';
import Arts from './Components/activity/Arts';
import Coactivities from './Components/activity/Coactivities';
import Clubs from './Components/activity/Clubs';
import House from './Components/activity/House';
import PopUp from './Components/PopUp';
import About from './Screens/About';
import MainGallery from './Components/MainGallery';

function App() {

  const[timedPopup , setTimedPopup] = useState(false);

  useEffect(() =>{
    setTimedPopup(() => {
      setTimedPopup(true)},
      3000)
  } , []);

  return (
    <div >
    <>
    <div>
    <PopUp trigger={timedPopup} setTrigger={setTimedPopup}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/881/842/original/school-admission-open-banner-abstract-shape-free-vector.jpg" alt="" />
      </PopUp>
    </div>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={HomeScreen} />
          <Route path='/legacy' exact Component={Legacy} />
          <Route path='/aims' exact Component={AimsObjectives} />
          <Route path='/mission' exact Component={MissionStatement} />
          <Route path='/schoolcommunity' exact Component={SchoolComunity} />
          <Route path='/words' exact Component={WordForParent} />
          <Route path='/infrastructure' exact Component={Infra} />
          <Route path='/facility' exact Component={facilities} />
          <Route path='/curriculum' exact Component={curriculum} />
          <Route path='/arts' exact Component={Arts} />
          <Route path='/club' exact Component={Clubs} />
          <Route path='/coactivities' exact Component={Coactivities} />
          <Route path='/gallery' exact Component={MainGallery} />
          <Route path='/house' exact Component={House} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/workshop' exact Component={Workshop} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
    </div>
  );
}

export default App;
