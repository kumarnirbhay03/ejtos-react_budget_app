import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency , dispatch } = useContext(AppContext);

    const changeBudget = (val) => {
        dispatch({
            type: 'CHG_BUDGET',
            payload: val,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" min="0" max="20000" value={budget} onChange={event => changeBudget(event.target.value)} step="10" ></input></span>
        </div>
    );
};
export default Budget;
