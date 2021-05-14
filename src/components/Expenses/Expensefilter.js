import React from 'react';

import './Expensefilter.css';

const ExpensesFilter = (props) => {
    const filterhandler=(e)=>{
       props.yeargetting(e.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.year} onChange={filterhandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;