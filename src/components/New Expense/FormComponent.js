import React, { useState } from 'react';
import './FormComponent.css';


const FormComponent = (props) => {
  const [stitle,setStitle]=useState(' ');
  const [samount,setSamount]=useState(' ');
  const [sdate,setSdate]=useState(' ');

  const titlehandler=(e)=>{
      setStitle(e.target.value);
  };
  const amounthandler=(e)=>{
      setSamount(e.target.value);
  };
  const datehandler=(e)=>{
    setSdate(e.target.value);
  };
  
  const formHandler=(e)=>{
      e.preventDefault();
      const formdata={
          title:stitle,
          amount:samount,
          date:new Date (sdate),
      };
    //   console.log(formdata);
    props.onformdata(formdata);
      setStitle(' ');
      setSamount(' ');
      setSdate(' ');
  };
    return (
        <form onSubmit={formHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" value={stitle} onChange={titlehandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0" step="1" value={samount} onChange={amounthandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" value={sdate} onChange={datehandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )
}

export default FormComponent;