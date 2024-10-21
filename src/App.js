import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/articles/create">
              <Create />
            </Route>
            
            <Route path="/articles/:id">
              <ArticleDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
