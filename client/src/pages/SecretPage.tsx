import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from 'react-hook-form';
import UserContext from '../context/UserContext';
import type { CodeProps } from '../context/UserContext';

function SecretPage() {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const { verifyCode } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CodeProps>();
    const onSubmit: SubmitHandler<CodeProps> = (data) => {
        try {
            setError(false);

            const isValid = verifyCode(data);

            if (isValid) {
                navigate('/', { replace: true });
            } else {
                setError(true);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };
    const onError: SubmitErrorHandler<CodeProps> = () => setError(false);
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
                <form
                    className="form text-sm md:text-lg lg:text-2xl grid gap-5"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <h2 className="font-bold">Question:</h2>
                    <p className=" border-b">
                        What word means "a polite greeting" and contains a water well and an action of arriving?
                    </p>
                    <fieldset className=" flex items-center gap-5">
                        <label htmlFor="code" className="font-bold">
                            Answer:
                        </label>
                        <input
                            id="code"
                            type="text"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            {...register('code', {
                                required: 'Required field.',
                            })}
                        />
                        {errors.code && <span className="text-red-600">{errors.code.message}</span>}

                        {error && <span>Incorrect code try again.</span>}
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

export default SecretPage;
