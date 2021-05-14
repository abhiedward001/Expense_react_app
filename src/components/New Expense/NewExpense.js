import React from 'react'
import  FormComponent from './FormComponent';
import './NewExpense.css';


const NewExpense = (props) => {
 const onformdatahandler=(data)=>{
     const childformdata={
         ...data,
         id:Math.random().toString(),
     };
     props.expenseformdata(childformdata);
 };
    return (
        <div className="new-expense">
            <FormComponent onformdata={onformdatahandler} />
        </div>
    )
}

export default NewExpense;
