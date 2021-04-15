import React from 'react';

export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash<span>+£300</span><button className="delete-button">x</button>
                </li>
            </ul>
        </div>
    )
}
