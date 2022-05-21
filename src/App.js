import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Notfound from './components/Shared/NotFound/Notfound';


function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Routes>
         <Route exact path='/home' element={<Home/>}/>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/registration' element={<Registration/>}/>
         <Route path='/appointment' element={<Appointment/>}/>
         <Route path='/*' element={<Notfound/>}/>
       </Routes>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
