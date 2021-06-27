import React from 'react';
import './UnitLeft.scss';

const UnitLeft = ({ selLeft }) => {

    const handleLeft = (e) => {
        selLeft(e.target.value)
    }

    return (
        <>
            <select onChange={handleLeft} className='unitLeft'>
                <option value="Kilometr" selected>Kilometr</option>
                <option value="Mile">Mile</option>
                <option value="Foot">Foot</option>
                <option value="Yard">Yard</option>
            </select>
        </>
    )
}

export default UnitLeft;