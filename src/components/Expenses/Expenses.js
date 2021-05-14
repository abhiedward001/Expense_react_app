import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './Expensefilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const[selectedyear,setSelectedyear]=useState('2021');
  const yeargettinghandler = (year) => {
     setSelectedyear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedyear} yeargetting={yeargettinghandler} />
      {props.items.map((eachexpense)=>{
        return(
          <ExpenseItem 
          title={eachexpense.title} 
          amount={eachexpense.amount}
           date={eachexpense.date} />
           );
      })}

      
    </Card>
  );
}

export default Expenses;
