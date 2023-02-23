import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { BudgetsContextProvider } from './context/BudgetContext';
import { AuthContextProvider } from './context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AuthContextProvider>
        <BudgetsContextProvider>
            <App /> 
        </BudgetsContextProvider>
    </AuthContextProvider>

    </BrowserRouter>

);


