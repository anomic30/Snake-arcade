import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import love from './assets/love.png';
import Navbar from './components/Navbar/Navbar';
import {api} from './functions/api'
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    async function createAnonUser() {
      await api.account.createAnonymousSession();
      await api.account.updateName('Anonymous');
    }
    if (!localStorage.getItem('cookieFallback')) {
      createAnonUser();
    }
  }, [])
  
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
