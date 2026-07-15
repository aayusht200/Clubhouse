import type { Post } from '../context/postsContext';

interface PostCardProps {
    post: Post;
}

function PostCard({ post }: PostCardProps) {
    console.log(post);

    return (
        <div className="post-card border bg-amber-300 p-2 rounded-lg shadow">
            <header className="post-title border-b text-lg md:text-xl lg:text-2xl font-bold">{post.title}</header>
            <div className="post-content md:text-lg lg:text-xl">{post.text}</div>
            <footer className="post-footer ">
                {post.first_name && (
                    <div className="flex justify-between border-t md:text-lg lg:text-xl">
                        <span>Created by: {`${post.first_name} ${post.last_name}`}</span>

                        <span>Created at: {post.created_at}</span>
                    </div>
                )}
            </footer>
        </div>
    );
}

export default PostCard;
