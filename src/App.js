import './App.css';

import Karen from './assets/karen.png'; // 1.1 mb
import MiniKaren from './assets/mini-karen.png'; // 15 kb

import ProgressiveImage from './components/ProgressiveImage/ProgressiveImage';

function App() {
  return (
    <div className='App'>
      <ProgressiveImage
        src={Karen}
        placeholder={MiniKaren}
        width='200'
        height='200'
        alt='karen'
      />
    </div>
  );
}

export default App;
