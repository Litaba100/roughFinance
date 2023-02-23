import React, { useState } from 'react';
import { useBudgetsContext } from '../hooks/useBudgetsContext';
import { useAuthContext } from '../hooks/useAuthContext';

function BudgetForm() {
    const {dispatch} = useBudgetsContext()

    const [Cartegory , setCartegory] = useState('');
    const [Amount , setAmount] = useState('');
    const [error , setError] = useState(null);
    const [emptyFields , setEmptyFields] = useState([]);
    const {user} = useAuthContext()


    const handleSubmit =  async (e) => {
        e.preventDefault(); 

        if(!user){
            setError("You must be logged in")
            return
        }

        const budget = { Cartegory , Amount};
        const response = await fetch('/api/budget' , {
            method: 'POST',
            body: JSON.stringify(budget),
            headers:{
                'Content-Type':"application/json" ,
                'Authorization':`Bearer ${user.token}`
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setError(null);
            setCartegory('');
            setAmount('');
            setEmptyFields([]);
            console.log("New budget added");
            dispatch({type:"CREATE_BUDGET" , payload: json});
        }
    }


  return (
    <div>
        <form className='B-Form' onSubmit={handleSubmit} >
            <h3>Add a new budget</h3>
            <label>Cartegory:</label>
            <input
                type="text"
                onChange={(e)=> setCartegory(e.target.value)}
                value={Cartegory}
                className={emptyFields.includes('Cartegory') ? 'error' : ''}
            />
              <label>Amount:</label>
            <input
                type="text"
                onChange={(e)=> setAmount(e.target.value)}
                value={Amount}
                className={emptyFields.includes('Amount') ? 'error' : ''}
            />

            <button>Save budget</button>
            {error && <div className='error'>{error}</div>}
        </form>
    </div>
  )
}

export default BudgetForm