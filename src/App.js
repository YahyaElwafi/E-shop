import Product from './components/Product';
import VideoInput from './components/VideoInput';
import './App.css';
import './VideoInput.css'

function App() {
  return (
    <div className="App">
      <h1>Video upload</h1>
      <VideoInput  width={200} height={400} />
      <Product/>
    </div>
  );
}

export default App;
