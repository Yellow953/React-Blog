const ArticleList = ({ articles, title, handleArticleDelete, handleArticleShow}) => {
    // const articles = props.articles;
    // const title = props.title;
    return ( 
        <div className="articles-list">
            <h2>{ title }</h2>
            { articles.map((article) => (
                <div className="article-preview" key={article.id}>
                    <div className="article-info">
                        <h2>{ article.title }</h2>
                        <p>Written by { article.author }</p>
                    </div>
                    <div className="article-controls">
                        <button onClick={() => handleArticleShow(article.id)} className="btn btn-primary">Show</button>
                        <button onClick={() => handleArticleDelete(article.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default ArticleList;