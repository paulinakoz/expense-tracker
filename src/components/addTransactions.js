import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalState';

export const AddTransaction = () =>{
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description: description,
            amount: +amount,
        }
        
        addTransaction(newTransaction);
    }
    
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="transactions" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Enter description..."
                    value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount<br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..."
                    value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
