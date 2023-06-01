import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
            <select className='alert alert-success' name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)} style={{color:"white" , backgroundColor: "lightgreen"}}>
                <option value="£">Uk(£)</option>
                <option value="₹">India(₹)</option>
                <option value="€">Europe(€)</option>
                <option value="$">Dollar($)</option>
            </select>
    );
};

export default Location;