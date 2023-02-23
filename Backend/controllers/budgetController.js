const budget = require('../models/budgetModel');
const mongoose = require('mongoose');


//get all budgets

const getBudgets = async (req , res) =>{
    const user_id = req.user._id
    const budgets = await budget.find({user_id}).sort({createdAT: -1});

    res.status(200).json(budgets);
}

//get single budget

const getBudget = async (req , res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such budget"});
    }

    const budget1 = await budget.findByiD()

    if(!budget1){
        return res.status(404).json({error: "No such budget"});
    }

    res.status(200).json(budget1);
}

//post a new budget

const createBudget = async (req , res) => {
    const {Name , Cartegory , Amount } = req.body;

    let emptyFields = []

    if(!Cartegory){
        emptyFields.push("Cartegory")
    }

    if(!Amount){
        emptyFields.push("Amount")
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in all the fields" , emptyFields})}

    try {
        const user_id = req.user._id
        const Budget = await budget.create({Name , Cartegory , Amount , user_id});
        res.status(200).json(Budget);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}


//delete a budget
const deleteBudget = async (req , res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such budget"});
    }

    const deletedBudget = await budget.findOneAndDelete({_id: id});

    if(!deletedBudget){
        return res.status(404).json({error: "No such budget"});
    }

    res.status(200).json(deletedBudget);



}

//update a budget
const updateBudget = async (req , res) =>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such budget"});
    }

    const updatedBudget = await budget.findOneAndUpdate({_id: id},{
        ...req.body
    })


    if(!updatedBudget){
        return res.status(404).json({error: "No such budget"});
    }

    res.status(200).json(updatedBudget);
    
}


module.exports = {
    getBudgets,
    getBudget,
    createBudget,
    deleteBudget,
    updateBudget
}