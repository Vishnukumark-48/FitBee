// Login.js
import React from 'react';
import '../Asset/CSSfiles/Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="username">Username  :     </label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:     </label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
