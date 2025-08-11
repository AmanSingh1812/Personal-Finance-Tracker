  import { useState } from 'react';
  import './App.css'
  import AddTransaction from './Components/AddTransaction';
  import Navbar from './Components/navbar';
  import TransactionList from './Components/TransactionList';
  import { TransactionContext } from "./Components/TransactionContext";
  import SummaryCard from './Components/SummaryCard';

  function App() {

    const [transaction, setTransaction] = useState([]);

    return (

        <TransactionContext.Provider value={{ transaction, setTransaction }}>
          <Navbar />
          <SummaryCard />
          <AddTransaction />
          <TransactionList />
        </TransactionContext.Provider>
      
    );
  }

  export default App
