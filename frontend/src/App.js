import {BrowserRouter , Routes , Route , Router , Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import react, {useState , useEffect} from 'react';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import Transactions from './components/components2/Transactions';
import Activity from './components/components2/Activity';
import SmsParser from './components/components2/SmsParser';
import Cartegory from './components/components2/Cartegory';
import Insights from './components/components2/Insights';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const {user} = useAuthContext()
  

  return ( 
    <>
    <Routes>
    <Route exact path='/' element={user ? <Dashboard/> : <Navigate to="/signin"/>}></Route>
    <Route exact path="/budget" element={<Budget/>} ></Route>
    <Route exact path="/transactions" element={user ?<Transactions/> : <Navigate to="/signin"/>} ></Route>
    <Route exact path="/activity" element={user ?<Activity/>: <Navigate to="/signin"/>} ></Route>
    <Route exact path="/sms" element={user ? <SmsParser/> : <Navigate to="/signin"/>} ></Route>
    <Route exact path="/cartegories" element={user ?<Cartegory/> : <Navigate to="/signin"/>} ></Route>
    <Route exact path="/insights" element={user ?<Insights/> : <Navigate to="/signin"/>} ></Route>
    <Route exact path="/signup" element={!user ? <SignUp/> : <Navigate to="/"/>} ></Route>
    <Route exact path="/signin" element={!user ? <SignIn/> : <Navigate to="/"/>} ></Route>
    </Routes>


  
    

    </>
  
  );
}

export default App;
