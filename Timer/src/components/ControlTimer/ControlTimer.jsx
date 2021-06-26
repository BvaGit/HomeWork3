import React from 'react';
import Button from '../Button';
import './ControlTimer.scss';

const ControlTimer = ({startTimer, stopTimer, resetTimer}) => {
    return(
        <div className='control'>
            <div onClick={stopTimer}>
                <Button title={'Stop'}/>
            </div>
            <div onClick={startTimer}>
                <Button title={'Start'}/>
            </div>
            <div onClick={resetTimer}>
                <Button title={'Reset'}/>
            </div>
        </div>
    )
}


export default ControlTimer;