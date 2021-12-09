import React from 'react'

const Footer = ({ lastMultipliers }) => {
    return (
        <div className="footer">
            <div className="last-multipliers-list">
                <span>
                    Lasts:
                </span>
                {lastMultipliers.map((item, index) => (
                    <div key={index} className="last-multipliers-item">
                        {item}X
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer
