import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer';
import Create from './pages/Create';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Project from './pages/Project/Project';

import useAuthContext from './hooks/useAuthContext';

function App() {
  const { user, authIsReady } = useAuthContext();
  console.log(user, authIsReady);

  return (
    <div className='app'>

        <BrowserRouter >
          <Sidebar /> 
          <Navbar />
  
          <Routes>
            <Route path='/' element={ <Dashboard />} />
            <Route path='/create' element={!user? <Login /> : <Create />} />
            <Route path='/sigup' element={!user ? <Signup />:   <Dashboard />} />
            <Route path='/login' element={!user ? <Login /> : <Dashboard />} />
            <Route path='/project/:id' element={ <Project /> } />
          </Routes>

          <Footer />
        </BrowserRouter>


    </div>
  );
}

export default App;
