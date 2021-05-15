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
  const filteredexpense=props.items.filter((exp)=>{
    return exp.date.getFullYear().toString()===selectedyear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter year={selectedyear} yeargetting={yeargettinghandler} />
      {filteredexpense.map((eachexpense)=>{
        return(
          <ExpenseItem 
          key={eachexpense.id}
          title={eachexpense.title} 
          amount={eachexpense.amount}
           date={eachexpense.date} />
           );
      })}

      
    </Card>
  );
}

export default Expenses;
