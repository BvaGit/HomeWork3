import React from 'react';
import './unitRight.scss';

const UnitRight = ({ selRight }) => {

    const handleRight = (e) => {
        selRight(e.target.value);
    }

    return (
        <>
            <select onChange={handleRight} className='unitRight'>
                <option value="Kilometr">Kilometr</option>
                <option value="Mile" selected>Mile</option>
                <option value="Foot">Foot</option>
                <option value="Yard">Yard</option>
            </select>
        </>
    )
}

export default UnitRight;