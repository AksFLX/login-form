import React, { useState } from "react";
import './App.css';

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset error message

        // Validation logic
        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }
        // Additional validation can be added here

        // If validation passes, you can proceed with form submission
        console.log("Form submitted:", { email, password });
    };

    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Signup</button>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="username">
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        Email
                    </label>
                    <label className="password">
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        Password
                    </label>
                    {!isLogin && (
                        <label className="confirm-password">
                            <input
                                type="password"
                                name="confirm-password"
                                required
                                placeholder="Confirm Password"
                            />
                            Confirm Password
                        </label>
                    )}
                    {error && <p className="error-message">{error}</p>} {/* Error message display */}
                    <button className="submit-btn" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
}