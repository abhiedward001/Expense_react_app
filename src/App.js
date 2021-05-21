import React, { useState } from 'react';
import Header from './components/Header';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';
import Footer from './components/Footer';
const dummydata = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
const [expenses,setExpenses]=useState(dummydata);
 
const expensedatahandler=(data)=>{
  console.log(data);
 setExpenses((prevExpense)=>{
   return [data, ...prevExpense];
 });
};
  return (
    <div>
        <Header title="My All Expenses" search={false}></Header>
      <NewExpense expenseformdata={expensedatahandler}/>
      <Expenses items={expenses} />
      <Footer/>
    </div>
  );
}

export default App;
