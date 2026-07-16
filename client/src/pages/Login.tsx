import { useState } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from 'react-hook-form';

import type { LoginData } from '../context/UserContext';

export default function Login() {
    const { login } = useContext(UserContext);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({ shouldUseNativeValidation: false, progressive: false });

    const onSubmit: SubmitHandler<LoginData> = (data) => {
        login(data)
            .then(() => {
                navigate('/', { replace: true });
            })
            .catch(() => {
                setError(true);
            });
    };
    const onError: SubmitErrorHandler<LoginData> = () => {
        setError(true);
    };
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
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="form text-sm md:text-lg lg:text-2xl "
                    noValidate
                >
                    <fieldset className="grid">
                        <label htmlFor="email" className="font-bold">
                            Email:
                        </label>
                        <input
                            type="email"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-100"
                            id="email"
                            {...register('email', {
                                required: 'Required field.',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email should match the pattern : example@email.com',
                                },
                            })}
                        />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                        <label htmlFor="password" className="font-bold">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="bg-white rounded-2xl px-2 p-1 "
                            id="password"
                            {...register('password', {
                                required: 'Required field.',
                                minLength: { value: 8, message: 'Minimum length is 8' },
                                maxLength: { value: 64, message: 'Maximum length is 64' },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                                    message: 'Must contain uppercase, lowercase, number and special character',
                                },
                            })}
                        />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
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
