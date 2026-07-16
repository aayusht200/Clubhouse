import type { Post } from '../context/PostsContext';

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    return (
        <div className="post-card border bg-amber-300 p-2 rounded-lg shadow">
            <header className="post-title border-b text-sm md:text-lg lg:text-2xl font-bold">{post.title}</header>
            <div className="post-content text-sm  lg:text-lg">{post.text}</div>
            <footer className="post-footer ">
                {post.first_name && (
                    <div className="grid  border-t text-xs md:text-sm lg:text-lg">
                        <span>Created by: {`${post.first_name} ${post.last_name}`}</span>

                        <span>Created on: {post.created_at?.split('T')[0]}</span>
                    </div>
                )}
            </footer>
        </div>
    );
}

export default PostCard;
