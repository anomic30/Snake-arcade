import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import love from './assets/love.png';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <Board/>
        <ScoreBoard/>
      </div>
      <div className="foot">
        <p>Made with</p>
        <img src={love} alt="love" />
        <p>by Anom</p>
      </div>
    </div>
  );
}

export default App;
