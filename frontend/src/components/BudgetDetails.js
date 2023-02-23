import React from 'react';
import { useBudgetsContext } from '../hooks/useBudgetsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useAuthContext } from '../hooks/useAuthContext';

function BudgetDetails({budget}) {

  const {dispatch} = useBudgetsContext();
  const {user} = useAuthContext

  const handleClick = async () => {

    // if(!user){
    //   return
    // }

    const response = await fetch("/api/budget/" + budget._id , {
      method: "DELETE",
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    });

    const json = await response.json()

    if(response.ok){
      dispatch({type:"DELETE_BUDGET" , payload: json});
    }
  }

  return (
    <div className='B-details'>
        <p><strong>Cartegory:</strong>{budget.Cartegory}</p>
        <p><strong>Amount:</strong>{budget.Amount}</p>
        <p>{formatDistanceToNow(new Date(budget.createdAt), {addSuffix: true})}</p>
        <button className='material-symbols-outlined'><span className='material-symbols-outlined' onClick={handleClick}>delete</span></button>
    </div>
  )
}

export default BudgetDetails;