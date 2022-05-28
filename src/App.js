import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Notfound from './components/Shared/NotFound/Notfound';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/services' element={<Services />} />

            <Route path='/services/:serviceId'
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>}
            />

            <Route path='/appointment'
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />
            <Route path='/*' element={<Notfound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
