import React, { useState } from 'react';

export const AddTransaction = () =>{
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="transactions">
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Enter description..."
                    value={description} onChange={(e) => setDescription(e)}/>
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount<br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount..."
                    value={amount} onChange={(e) => setAmount(e)}/>
                </div>
            </form>
        </div>
    )
}
