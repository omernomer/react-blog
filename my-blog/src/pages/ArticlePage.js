import React,{useState,useEffect} from 'react';
import AddCommentForm from '../components/AddCommentForm';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) => {//match is provided by Route component to give url info
    const name=match.params.name;
    const article=articleContent.find(article=>article.name===name);
    const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]});
    useEffect(()=>{
        const fetchData = async()=>{
            const result=await fetch(`/api/articles/${name}`);
            const body=await result.json();
            setArticleInfo(body);
        }
        fetchData();        
    },[name]);//update the component every time the name changes or everytime we change between articles
    if (!article) {
        return (<NotFoundPage/>);
    }
    const otherArticles=articleContent.filter(article=>(article.name!==name));
    return (
        <>
        <div className="row">
            <div className="col-8 text-left">
                <h1>{article.title}</h1>
                <UpvotesSection upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} articleName={name}/>
                <div>{article.content.map(p=>(<p>{p}</p>))}</div>
            </div>
            <div className="col-4 text-left">
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                <CommentsList comments={articleInfo.comments}/>
                <div className="border m-1 p-2 bg-warning">
                    <h3>Related Articles:</h3>
                    <ArticlesList articles={otherArticles}/>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default ArticlePage;