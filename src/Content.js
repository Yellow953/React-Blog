import { useState, useEffect } from 'react';
import ArticleList from './ArticleList';

const Content = () => {
    const [articles, setArticles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleArticleDelete = (id) => {
        const newArticle = articles.filter(article => article.id !== id);
        setArticles(newArticle);
    }

    const handleArticleShow = (id) => {

    }

    useEffect(() => {
        fetch('http://localhost:8000/articles')
            .then(res => {
                if (!res.ok){
                    throw new Error("Could not fetch data from this url...");
                }
                return res.json();
            }).then((data) => {
                setIsLoading(false);
                setArticles(data);
                setError(null);
            }).catch((e) => {
                setError(e.message);
                setIsLoading(false);
            });
    }, []);

    return ( 
    <div className="home">
        { error && <div className='error'>{error}</div> }
        
        { isLoading && <h2 className='loading'>Loading...</h2>}

        { articles && <ArticleList articles={articles} title="All Articles" handleArticleDelete={handleArticleDelete} handleArticleShow={handleArticleShow}/> }
    </div>
    );
}
 
export default Content;