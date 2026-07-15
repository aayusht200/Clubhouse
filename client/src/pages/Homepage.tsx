import { useContext } from 'react';
import { PostContext } from '../context/PostsContext.tsx';
import PostCard from '../componenets/PostCard';
import { useNavigate } from 'react-router';
import UserContext from '../context/UserContext.tsx';
function Homepage() {
    const { posts } = useContext(PostContext);
    const { logout, isLoggedIn } = useContext(UserContext);
    const navigator = useNavigate();
    return (
        <div className="flex flex-col gap-10 ">
            <header className="shadow bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl ">Clubhouse</h1>
                </div>

                <div className="right-header ml-auto">
                    {isLoggedIn ? (
                        <button
                            type="button"
                            className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer"
                            onClick={async () => {
                                await logout();
                                navigator('/');
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer"
                            onClick={() => navigator('/login')}
                        >
                            Login
                        </button>
                    )}
                </div>
            </header>
            <div className="content grid  grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 pl-5 pr-5">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        return <PostCard key={post.id} post={post} />;
                    })
                ) : (
                    <>Loading...</>
                )}
            </div>
        </div>
    );
}

export default Homepage;
