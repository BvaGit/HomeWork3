import React from 'react';
import DropdownTheme from '../DropdownTheme';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h2>“React Timer”</h2>
            <DropdownTheme />
        </div>
    )
}

export default Header