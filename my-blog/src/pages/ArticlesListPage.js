import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleList from './article-content';

const ArticlesListPage = () => {
    return (
        <>
        <div className="col-6 m-auto">
            <h2 className="display-4">Articles List</h2>
            <ArticlesList articles={articleList}/>
        </div>
        </>
    );
}
 
export default ArticlesListPage;