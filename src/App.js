import './App.css';

import Karen from './assets/karen.png'; // 1.1 mb
import MiniKaren from './assets/mini-karen.png'; // 15 kb

import ProgImg from './components/ProgImg/ProgImg';

function App() {
  return (
    <div className='App'>
      <ProgImg mini={MiniKaren} img={Karen} width='200' height='200' />
    </div>
  );
}

export default App;
