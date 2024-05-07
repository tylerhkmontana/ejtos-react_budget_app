import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget,expenses } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0)
        if (updatedBudget > 20000) {
            alert("The value cannot exceed 20000");
        } else if (updatedBudget < totalExpenses) {
            alert("The value cannot be smaller than the current expenses");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget
            })
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</span>
</div>
    );
};
export default Budget;