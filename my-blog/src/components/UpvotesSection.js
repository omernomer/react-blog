import React from 'react';
import './UpvotesSection.css';
const UpvotesSection = ({articleName,upvotes,setArticleInfo}) => {

    const upvoteArticle=async()=>{
        const result=await fetch(`/api/articles/${articleName}/upvote`,
        {
            method:'post',
        });
        const body=await result.json();
        setArticleInfo(body);
    }

    return (
        <div id="upvotes-section" className="text-right">
            
            <p>Upvotes: {upvotes} <button className="btn" title="Upvote" onClick={()=>upvoteArticle()}><i className="bi bi-arrow-up-circle-fill upvote-btn"></i></button></p>
        </div>
    );
}
 
export default UpvotesSection;