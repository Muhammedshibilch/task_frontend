import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Footer from './Components/Footer';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Auth setUser={setUser} />} />
        <Route path='/register' element={<Auth setUser={setUser} insideRegister={true} />} />
        <Route path='/userprofile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
