import React from 'react';

const CommentsList = ({comments}) => {
    return (
        <>
        <div className="border m-1 p-2 bg-info">
            <h4 className="text-white">Comments:</h4>
            {comments.map((comment,key)=>(
                <div className="border m-1 p-1 bg-white" key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
        </>
    );
}
 
export default CommentsList;