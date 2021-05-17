import React,{useState} from 'react'
import  FormComponent from './FormComponent';
import './NewExpense.css';


const NewExpense = (props) => {

    const[editbutton,setEditbutton]=useState(false);
 const onformdatahandler=(data)=>{
     const childformdata={
         ...data,
         id:Math.random().toString(),
     };
     props.expenseformdata(childformdata);
     setEditbutton(false);
 };
 const editbuttonhandler=()=>{
     setEditbutton(true);
 }
 const stopformview=()=>{
     setEditbutton(false);
 }

    return (
        <div className="new-expense">
            {!editbutton && <button onClick={editbuttonhandler} >Add New Expense</button>}
        { editbutton && <FormComponent onformdata={onformdatahandler} onCancel={stopformview} /> }  
        </div>
    )
}

export default NewExpense;
