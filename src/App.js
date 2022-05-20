import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Notfound from './components/Shared/NotFound/Notfound';


function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Routes>
         <Route exact path='/home' element={<Home/>}/>
         <Route path='/*' element={<Notfound/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
