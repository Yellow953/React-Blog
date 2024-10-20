import Navbar from './Navbar';
import Content from './Content';

function App() {
  const text = "Hello World";
  
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
