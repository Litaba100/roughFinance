import React , { useEffect } from 'react';
import BudgetDetails from './BudgetDetails';
import BudgetForm from './BudgetForm';
import { useBudgetsContext } from '../hooks/useBudgetsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const BudgetItems = () => {

  // const [budgets , setBudgets] = useState(null);
  const {budgets , dispatch} = useBudgetsContext()
  const {user} = useAuthContext()

  useEffect(() => {

    const fetchBudgets = async () => {
      const response = await fetch("/api/budget" , {
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if(response.ok){
        // setBudgets(json)
        dispatch({type:"SET_BUDGETS" , payload: json})
      }

    }

    if(user){
      fetchBudgets()
    }

    
  }, [dispatch , user])

  return (
    <div className='B-Items'>
      <BudgetForm />
        <div className='budgets'>
          {budgets && budgets.map((budget) =>(
            <BudgetDetails key={budget._id} budget={budget}/>
            
          ))}
        </div>
      
    </div>
  )
}

export default BudgetItems;