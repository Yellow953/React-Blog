import { Link } from 'react-router-dom';

const ArticleList = ({ articles, title }) => {
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
                        <Link to={ `/articles/${article.id}` } className="btn btn-primary">Show</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default ArticleList;