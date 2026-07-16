import { useNavigate } from 'react-router';
import { useState } from 'react';
import { PostContext } from '../context/PostsContext';
import { useContext } from 'react';
const CreatePost = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const [post, setPost] = useState({ title: '', text: '' });
    const { createPost } = useContext(PostContext);
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        await createPost(post)
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                setError(true);
            });
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
            <div className="content  px-5 p-4 grid items-center justify-center flex-1">
                <form onSubmit={handleSubmit} className="form text-sm md:text-lg lg:text-2xl ">
                    <fieldset className="grid">
                        <label htmlFor="email" className="font-bold">
                            Title:
                        </label>
                        <input
                            type="text"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-120"
                            name="email"
                            id="email"
                            value={post.title}
                            onChange={(e) => {
                                setPost((prev) => ({ ...prev, title: e.target.value }));
                            }}
                        />
                        <label htmlFor="text" className="font-bold">
                            Message:
                        </label>
                        <textarea
                            name="text"
                            id="text"
                            className="bg-white rounded-2xl px-2 p-1 w-60 md:w-80 lg:w-150 line-clamp-7 min-h-60"
                            value={post.text}
                            onChange={(e) => {
                                setPost((prev) => ({ ...prev, text: e.target.value }));
                            }}
                        ></textarea>
                        {error && <span>Unable to send Message please try again</span>}
                    </fieldset>
                    <div className="action flex justify-evenly p-5">
                        <button
                            type="reset"
                            className="border rounded-2xl px-3 font-bold hover:bg-amber-500 cursor-pointer"
                            onClick={() => setPost({ title: '', text: '' })}
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
