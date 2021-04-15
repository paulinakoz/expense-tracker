import './App.css';
import { Heading } from './components/header.js';
import { Balance }from './components/balance.js';
import { IncomeExpenses } from './components/income-expenses.js';
import { TransactionList } from './components/transactionList.js';
import { AddTransaction } from './components/addTransactions.js';

import { GlobalProvider } from './context/globalState.js';

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
