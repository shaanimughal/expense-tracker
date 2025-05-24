const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenses');

router.get('/', expenseController.getExpenses);
router.get('/add', expenseController.getAddExpense);
router.post('/add', expenseController.postAddExpense);
router.get('/edit/:id', expenseController.getEditExpense);
router.post('/edit/:id', expenseController.postEditExpense);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;