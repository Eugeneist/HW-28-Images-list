import './App.css';
import ImagesList from './components/ImagesList';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <ImagesList></ImagesList>
      {/* <Button color="primary" size="large"onClick={ImagesList}>More</Button> */}
    </div>
  );
}

export default App;
