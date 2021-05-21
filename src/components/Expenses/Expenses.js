import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './Expensefilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpenseList'
const Expenses = (props) => {
  const[selectedyear,setSelectedyear]=useState('2021');
  const yeargettinghandler = (year) => {
     setSelectedyear(year);
  };
  const filteredexpense=props.items.filter((exp)=>{
    return exp.date.getFullYear().toString()===selectedyear;
  })



  return (
    <div className="container">
      <Card className="expenses">
      <ExpensesFilter year={selectedyear} yeargetting={yeargettinghandler} />
     <ExpenseList items={filteredexpense}/>
    </Card>
    </div>
    
  );
}

export default Expenses;
