import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from './useFetch';

const ArticleDetail = () => {
    const { id } = useParams(); 
    const { data:article, error, isLoading } = useFetch('http://localhost:8000/articles/' + id);

    return ( 
        <div className="container">
            { error && <div className='error'>{error}</div> }
            
            { isLoading && <h2 className='loading'>Loading...</h2>}

            { article &&
                <div className="blog-detail">
                    <article>
                        <h2>{ article.title }</h2>
                        <h3>Written By { article.author }</h3>
                        <p>{ article.body }</p>
                    </article>
                </div>
            }
        </div>
    );
}
 
export default ArticleDetail;