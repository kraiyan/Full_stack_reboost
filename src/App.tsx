import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.tsx';
import SignIn from './components/SignIn.tsx';
import UserDashboard from './components/UserDashboard.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import Header from './components/Header.tsx';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Additional logout logic
    };
    return (
        <>
        <Header title="My Application" isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Router>
           <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
        </>
    );
};

export default App;
