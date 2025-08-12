
import './App.css';
import { AddTransaction } from './components/AddTransaction.js';
import { Balance } from './components/Balance.js';
import { Header } from './components/Header.js';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionList } from './components/TransactionList.js';

function App() {
  return (
    <div>
     <Header/>
     <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
     </div>
    </div>
  );
}

export default App;
