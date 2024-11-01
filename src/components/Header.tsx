import React from 'react';
import '../header.css'; // Make sure to import the CSS file

interface HeaderProps {
    title: string;
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, isLoggedIn, onLogout }) => {
    return (
        <header className="header-container">
            <h1>{title}</h1>
            <nav className="nav-links">
                <a href="/user">Home</a>
                <a href="/about">About</a>
                {isLoggedIn ? (
                    <>
                        <a href="/dashboard">Dashboard</a>
                        <button className="logout-button" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <a href="/signin">Login</a>
                        <a href="/signup">Sign Up</a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
