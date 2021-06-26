import React from 'react';
import './DropdownTheme.scss';
const DropdownTheme = () => {
    return(
        <div className="dropdown">
            <p>Theme</p>
            <select>
                <option>Light</option>
                <option>Dark</option>
            </select>
        </div>
    )
}

export default DropdownTheme;