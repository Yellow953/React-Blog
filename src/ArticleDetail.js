import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ArticleDetail = () => {
    const { id } = useParams(); 
    const { data:article, error, isLoading } = useFetch('http://localhost:8000/articles/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/articles/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    };

    return ( 
        <div className="container">
            { error && <div className='error'>{error}</div> }
            
            { isLoading && <h2 className='loading'>Loading...</h2>}

            { article &&
                <div className="blog-detail">
                    <article>
                        <div className="layout">
                            <div>
                                <h2>{ article.title }</h2>
                                <h3>Written By { article.author }</h3>
                            </div>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>

                        <p>{ article.body }</p>
                    </article>
                </div>
            }
        </div>
    );
}
 
export default ArticleDetail;