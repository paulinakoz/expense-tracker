import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
    const context = useContext(GlobalContext);

    const amounts = context.transactions.map(transaction => transaction.amount)

    let total = 0;
    amounts.forEach(amount => {
        total += amount;
    });

    return (
        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">£{total.toFixed(2)}</h1>
        </div>
    )
}
