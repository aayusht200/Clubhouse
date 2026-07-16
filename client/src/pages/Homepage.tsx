import { useContext } from 'react';
import { PostContext } from '../context/PostsContext.tsx';
import PostCard from '../components/PostCard';
import { useNavigate } from 'react-router';
import UserContext from '../context/UserContext.tsx';
function Homepage() {
    const { posts, refreshPosts } = useContext(PostContext);
    const { logout, isLoggedIn, user } = useContext(UserContext);
    const navigator = useNavigate();
    const buttonStyle = 'border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer';
    return (
        <div className="flex flex-col gap-10 ">
            <header className="shadow bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl ">Clubhouse</h1>
                </div>

                <div className="right-header ml-auto">
                    {isLoggedIn ? (
                        <div className="flex gap-3">
                            {!user?.is_member && (
                                <button type="button" className={buttonStyle} onClick={() => navigator('/secretpage')}>
                                    Join Clubhouse
                                </button>
                            )}

                            <button type="button" className={buttonStyle} onClick={() => navigator('/create-post')}>
                                Create Post
                            </button>

                            <button
                                type="button"
                                className={buttonStyle}
                                onClick={async () => {
                                    await logout();
                                    await refreshPosts();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button type="button" className={buttonStyle} onClick={() => navigator('/login')}>
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
