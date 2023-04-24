import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/generalLogin">Login</a></li>
                    <li><a href="/generalRegistration">Registrazione</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;