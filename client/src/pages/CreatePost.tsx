import { useNavigate } from 'react-router';
import { useState } from 'react';
import { PostContext } from '../context/PostsContext';
import { useContext } from 'react';
import { useForm, type SubmitHandler, type SubmitErrorHandler } from 'react-hook-form';
import type { newPostProps } from '../context/PostsProvider';

const CreatePost = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const { createPost } = useContext(PostContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<newPostProps>();
    const onSubmit: SubmitHandler<newPostProps> = (data) => {
        createPost(data)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                setError(true);
            });
    };
    const onError: SubmitErrorHandler<newPostProps> = () => setError(false);
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
                <form onSubmit={handleSubmit(onSubmit, onError)} className="form text-sm md:text-lg lg:text-2xl ">
                    <fieldset className="grid">
                        <label htmlFor="title" className="font-bold">
                            Title:
                        </label>
                        <input
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            id="title"
                            {...register('title', {
                                required: 'Title is required.',
                                maxLength: {
                                    value: 400,
                                    message: 'Title too long',
                                },
                            })}
                        />
                        {errors.title && <span className="text-red-600">{errors.title.message}</span>}
                        <label htmlFor="text" className="font-bold">
                            Message:
                        </label>
                        <textarea
                            id="text"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-150 line-clamp-7 min-h-60"
                            {...register('text', {
                                required: 'Message is required.',
                            })}
                        ></textarea>
                        {errors.text && <span className="text-red-600">{errors.text.message}</span>}
                        {error && <span>Unable to send Message please try again</span>}
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
};

export default CreatePost;
