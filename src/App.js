import Navbar from './Navbar';
import Content from './Content';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const text = "Hello World";
  
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
