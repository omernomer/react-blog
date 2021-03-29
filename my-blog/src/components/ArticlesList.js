import React from 'react';
import {Link} from 'react-router-dom';

const ArticlesList = ({articles}) => {
    return (
        <>
        {articles.map((article,key)=>(
            <div className="justify-content-center">
                <div className="border m-1 bg-white p-2">
                <Link key={key} className="text-decoration-none" to={`/article/${article.name}`}>
                    <h3 className="text-dark text-left">{article.title}</h3>
                    <p className="text-muted text-left">{article.content[0].substring(0,150)}...</p>
                </Link>
                </div>
            </div>
        ))}
        </>
    );
}
 
export default ArticlesList;