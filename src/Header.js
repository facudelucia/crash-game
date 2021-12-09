import React from 'react'

const Header = ({ credits }) => {
    return (
        <div className="header">
            <span>
                <img src="./assets/money.png" className="money-icon" />
                {credits}
            </span>
        </div>
    )
}

export default Header
