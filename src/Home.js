import ArticleList from './ArticleList';
import useFetch from './useFetch';

const Home = () => {
    const {data:articles, isLoading, error } = useFetch('http://localhost:8000/articles');    

    return ( 
    <div className="home">
        { error && <div className='error'>{error}</div> }
        
        { isLoading && <h2 className='loading'>Loading...</h2>}

        { articles && <ArticleList articles={articles} title="All Articles" /> }
    </div>
    );
}
 
export default Home;