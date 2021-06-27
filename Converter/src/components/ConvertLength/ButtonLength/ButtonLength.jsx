import React from 'react';
import * as convert from '../../../Helpers/converLength';
import './buttonLength.scss';

const ButtonLength = ({ left, right, userData, length}) => {

    const hendleConverte = () =>{
        if(left === "Mile" && right === "Kilometr"){
            const mileToKil =  convert.mileToKm(userData);
            length(mileToKil);
        } else if(left === "Kilometr" && right === "Mile"){
            const KilToMile =  convert.kmToMile(userData);
            length(KilToMile);
        } else if(left === "Kilometr" && right === "Foot"){
            const kilToFoot = convert.kmToFoot(userData);
            length(kilToFoot);
        } else if(left === "Foot" && right === "Kilometr"){
            const footToKil = convert.footToKm(userData)
            length(footToKil);
        } else if (left === "Kilometr" && right === "Yard"){
            const kilToYard = convert.kmToYard(userData);
            length(kilToYard);
        } else if (left === "Yard" && right === "Kilometr"){
            const yardToKil = convert.yardToKm(userData);
            length(yardToKil);
        } else if (left === "Mile" && right === "Yard"){
            const mileToYard = convert.mileToYard(userData);
            length(mileToYard);
        } else if (left === "Yard" && right === "Mile"){
            const yardToMile = convert.yardToMile(userData);
            length(yardToMile);
        } else if (left === "Mile" && right === "Foot"){
            const mileToFoot = convert.mileToFoot(userData);
            length(mileToFoot);
        } else if (left === "Foot" && right === "Mile"){
            const footToMile = convert.footToMile(userData);
            length(footToMile);
        } else if (left === "Foot" && right === "Yard"){
            const footToYard = convert.footToYard(userData);
            length(footToYard);
        } else if (left === "Yard" && right === "Foot"){
            const yardToFoot = convert.yardToFoot(userData);
            length(yardToFoot);
        }
    }

    return (
        <button onClick={hendleConverte} className="btnConvert">Convert</button>
    )
}

export default ButtonLength;