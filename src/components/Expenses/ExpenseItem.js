import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

//below is the state variable
  // const [title,setTitle] =useState(props.title);

  // const buttonhandler=()=>{
  //   setTitle('updated');
  // };

  return(
    <div className="container">
        <li>
       <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description container'> 
        <h2>{props.title}</h2>
        <div className='expense-item__price'>₹ {props.amount}</div>&nbsp;
      </div> 
      {/* <button onClick={buttonhandler}>Change Title</button> */}
    </Card>
    </li>
    </div>
  
   
  );
}

export default ExpenseItem;
