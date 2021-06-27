import React from 'react';
import UnitRight from '../UnitRight'
import './right.scss';

const Right = ({ length }) => {


    return (
        <div className='right'>
            <p className="right__answer">{ length }</p>
            <UnitRight />
        </div>
    )
}

export default Right