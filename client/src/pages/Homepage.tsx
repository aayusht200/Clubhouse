import { useContext } from 'react';
import { PostContext } from '../context/postsContext';
import PostCard from '../componenets/PostCard';
function Homepage() {
    const { posts } = useContext(PostContext);
    return (
        <div className="flex flex-col gap-10 ">
            <header className="border bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1 className="font-bold text-xl">Clubhouse</h1>
                </div>
                <div className="right-header ml-auto ">
                    <button type="button" className="border rounded-xl pl-2 pr-2">
                        Login
                    </button>
                </div>
            </header>
            <div className="content grid  grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 pl-5 pr-5">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        return <PostCard key={post.id} post={post} />;
                    })
                ) : (
                    <>Loading</>
                )}
            </div>
        </div>
    );
}

export default Homepage;
