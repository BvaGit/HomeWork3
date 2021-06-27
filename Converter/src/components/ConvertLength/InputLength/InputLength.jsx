import React from 'react';
import UnitLeft from '../UnitLeft'
import './inputLength.scss';

const InputLength = ({ userLength }) => {

    const handleValue = (e) => {
        userLength(e.target.value)
    }

    return (
        <div className="left">
            <input type="number" onChange={handleValue} className="left__input" placeholder="enter your length here"/>
            <UnitLeft />
        </div>
    )
}

export default InputLength;