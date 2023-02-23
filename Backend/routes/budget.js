const express = require('express');
const mongoose = require('mongoose');
const budget = require('../models/budgetModel');
const { createBudget ,
        getBudgets , 
        getBudget ,
        deleteBudget,
        updateBudget
    } = require('../controllers/budgetController');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all budget routes
router.use(requireAuth)

router.use(
    express.urlencoded({ extended: true })
  );

//get all budgets
router.get('/' , getBudgets);

//get single budget
router.get('/:id' , getBudget);

//post a new budget
router.post('/' , createBudget);

//delete a budget
router.delete('/:id' , deleteBudget);

//update a budget
router.patch('/:id' , updateBudget);



module.exports = router