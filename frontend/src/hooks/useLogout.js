import { useAuthContext } from "./useAuthContext";
import { useBudgetsContext } from "./useBudgetsContext";

export const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch:budgetsDispatch} = useBudgetsContext()

    function logout() {

        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch an action
        dispatch({type:'LOGOUT'})
        budgetsDispatch({type:'SET_BUDGETS' , payload : null})


    }

    return logout
}