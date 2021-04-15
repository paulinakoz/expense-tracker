import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const IncomeExpenses = () =>{
    const context = useContext(GlobalContext);

    const amounts = context.transactions.map(transaction => transaction.amount)

    let income = 0;
    amounts.forEach(amount => {
        if(amount > 0){
            income += amount;
        }
    })

    let expense = 0;
    amounts.forEach(amount => {
        if(amount < 0){
            expense += amount;
        }
    })

    return (
         <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+{income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{expense.toFixed(2)}</p>
            </div>
        </div>
    )
}
