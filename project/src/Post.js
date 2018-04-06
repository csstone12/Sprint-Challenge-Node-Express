import React from 'react';

const Post = ({ post }) => {
    return (
        <div className='Post'>
            <h1>
                {post.title}
            </h1>
            <div>
                {post.contents}
            </div>
        </div>
    );
};

export default Post;