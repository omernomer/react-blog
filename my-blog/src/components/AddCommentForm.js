import React,{useState} from 'react';

const AddCommentForm = ({articleName,setArticleInfo}) => {
    const [username,setUsername]=useState('');
    const [commentText,setCommentText]=useState('');
    const addComment=async()=>{
        const result=await fetch(`/api/articles/${articleName}/add-comment`,{
            method:'post',
            body:JSON.stringify({
                username:username,
                text:commentText,
            }),
            headers:{
                'Content-Type':'application/json',
            },
        });
        const body=await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }
    return (
        <div className="comment-form border m-1 p-2">
            <h4>Add a Comment:</h4>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Comment:</label>
                <textarea value={commentText}  className="form-control" onChange={(e)=>setCommentText(e.target.value)}></textarea>
            </div>
            <button className="btn btn-secondary" onClick={()=>addComment()}>Add Comment</button>
        </div>
        
    );
}
 
export default AddCommentForm;