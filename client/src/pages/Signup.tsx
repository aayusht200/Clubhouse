import { useNavigate } from 'react-router';
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from 'react-hook-form';
import type { SignupData } from '../context/UserContext';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const { signup } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<SignupData>();
    const onSubmit: SubmitHandler<SignupData> = (data) => {
        signup(data)
            .then(() => {
                navigate('/login', { replace: true });
            })
            .catch(() => {
                setError(true);
            });
    };
    const onError: SubmitErrorHandler<SignupData> = () => setError(false);

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
            <div className="content  px-5 p-4 grid items-center justify-center flex-1">
                <form className="form text-sm md:text-lg lg:text-2xl " onSubmit={handleSubmit(onSubmit, onError)}>
                    <fieldset className="grid">
                        <label htmlFor="email" className="font-bold">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            {...register('email', {
                                required: 'Required field.',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email should match the pattern : example@email.com',
                                },
                            })}
                        />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                        <label htmlFor="first_name" className="font-bold">
                            First Name:
                        </label>
                        <input
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            {...register('first_name', {
                                required: 'Required field.',
                                maxLength: { value: 20, message: 'Max Length 20.' },
                            })}
                            id="first_name"
                        />
                        {errors.first_name && <span className="text-red-600">{errors.first_name.message}</span>}
                        <label htmlFor="last_name" className="font-bold">
                            Last Name:
                        </label>
                        <input
                            id="last_name"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            {...register('last_name', {
                                required: 'Required field.',
                                maxLength: { value: 20, message: 'Max Length 20.' },
                            })}
                        />
                        {errors.last_name && <span className="text-red-600">{errors.last_name.message}</span>}
                        <label htmlFor="password" className="font-bold">
                            Password:
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
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

                        {error && (
                            <>
                                <span>Email already exists try to login.</span>
                                <button
                                    type="button"
                                    className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            </>
                        )}
                    </fieldset>
                    <div className="action flex justify-evenly p-5">
                        <button
                            type="reset"
                            className="border rounded-2xl px-3 font-bold hover:bg-amber-500 cursor-pointer"
                            onClick={() => {
                                reset();
                                setError(false);
                            }}
                        >
                            Clear
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

export default Signup;
