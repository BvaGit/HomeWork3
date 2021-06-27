import React from 'react';
import InputLength from '../ConvertLength/InputLength';
import Right from '../ConvertLength/Right';
import ButtonLength from '../ConvertLength/ButtonLength';
import './App.scss';
const App = () => {
    return (
        <>
            <div className="container">
                <h2 className="title">Converter length</h2>
                <div className="panel">
                    <InputLength/>
                    < Right />
                </div>
                <ButtonLength/>
            </div>

        </>
    )
}

export default App;