import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.items.length===0)return (<h2 className="expenses-list__fallback">Oops, No data found !!</h2>);
    return (
        <ul className="expenses-list">
            { props.items.map((eachexpense) => {
                return (
                    <ExpenseItem
                        key={eachexpense.id}
                        title={eachexpense.title}
                        amount={eachexpense.amount}
                        date={eachexpense.date} />
                );
            })
            }
        </ul>
    );
}

export default ExpenseList
