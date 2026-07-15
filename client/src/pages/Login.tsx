import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
export default function Login() {
    const { login } = useContext(UserContext);
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login({ email: userData.email, password: userData.password });
            navigate('/', { replace: true });
        } catch (err) {
            console.log(err);
            setError(true);
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="shadow bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1
                        className="font-bold text-lg md:text-xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Clubhouse
                    </h1>
                </div>
            </header>
            <div className="content  pl-5 pr-5 grid items-center justify-center flex-1">
                <form onSubmit={handleLogin} className="form text-sm md:text-lg lg:text-2xl ">
                    <fieldset className="grid">
                        <label htmlFor="email" className="font-bold">
                            Email:
                        </label>
                        <input
                            type="text"
                            className="bg-white rounded-2xl px-2 p-1 "
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={(e) => {
                                setError(false);
                                setUserData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }));
                            }}
                        />
                        <label htmlFor="password" className="font-bold">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="bg-white rounded-2xl px-2 p-1 "
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={(e) => {
                                setError(false);
                                setUserData((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }));
                            }}
                        />
                        {error && <span>Invalid Username/Password</span>}
                    </fieldset>
                    <div className="action flex justify-evenly p-5">
                        <button
                            type="button"
                            onClick={() => {
                                navigate('/signup');
                            }}
                            className="border font-bold rounded-2xl px-3  hover:bg-amber-500 cursor-pointer"
                        >
                            Signup
                        </button>
                        <button
                            type="submit"
                            className="border rounded-2xl px-3 font-bold hover:bg-amber-500 cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
