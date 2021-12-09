import React from 'react'

const Sidebar = ({ bet, handleSubmit, handleChange, handleRetire, isPlacedBet, lastBets }) => {
    return (
        <div className="sidebar">

            <div className="sidebar-top">
                <form>
                    <input value={bet} name="bet" onChange={handleChange} type="number" />
                </form>
                {
                    isPlacedBet
                        ? <button onClick={handleRetire}>Retirarme</button>
                        : <button onClick={handleSubmit} type="submit">Place bet</button>
                }
            </div>

            <div className="last-bets-list">
                {
                    lastBets.map((bet, index) => (
                        <div key={index} className="last-bets-item">
                            {
                                bet.lost
                                    ? <span className="last-bets-item-lost">
                                        - ${bet.profit}
                                    </span>
                                    : <span className="last-bets-item-won">
                                        + ${bet.profit}
                                    </span>
                            }

                            <span>
                                ${bet.betProp}
                            </span>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Sidebar
