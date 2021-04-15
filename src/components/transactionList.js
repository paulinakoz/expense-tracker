import React, { useContext } from 'react';
import { Transaction } from './transaction.js'
import { GlobalContext } from '../context/globalState';

export const TransactionList = () => {
    const context = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {context.transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
}
