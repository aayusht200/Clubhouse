import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
export default function Login() {
    const { user, login } = useContext(UserContext);
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [error, setError] = useState();
    const navigate = useNavigate();
    async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login({ email: userData.email, password: userData.password });
            navigate('/', { replace: true });
        } catch (err) {
            console.log(err);
            // setError(err);
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="border bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Clubhouse</h1>
                </div>
            </header>
            <div className="content  pl-5 pr-5 grid items-center justify-center flex-1">
                <form onSubmit={handleLogin} className="form text-sm md:text-lg lg:text-2xl font-bold">
                    <fieldset className="grid">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            className="bg-white rounded-2xl pl-2 pr-2 p-1"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            className="bg-white rounded-2xl pl-2 pr-2 p-1"
                            name="password"
                            id="password"
                            value={userData.password}
                            onChange={(e) =>
                                setUserData((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />
                    </fieldset>
                    <div className="action flex justify-evenly p-5">
                        <button
                            type="button"
                            onClick={() => {
                                navigate('/signup');
                            }}
                            className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer"
                        >
                            Signup
                        </button>
                        <button
                            type="submit"
                            className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
