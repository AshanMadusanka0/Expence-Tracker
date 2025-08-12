
import './App.css';
import { Balance } from './components/Balance.js';
import { Header } from './components/Header.js';

function App() {
  return (
    <div>
     <Header/>
     <div className='container'>
      <Balance/>
     </div>
    </div>
  );
}

export default App;
