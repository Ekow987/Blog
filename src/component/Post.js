import React from 'react';

function Post(props) {
  const post= props.post;
    return (
        <div id="mon">
         <div className="ana" >{post.content}</div>
         {post.content}
         
        

          
        </div>
    )
}

export default Post;
