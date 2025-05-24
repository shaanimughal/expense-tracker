const Expense = require('../models/expense.js');

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.render('index', { expenses });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAddExpense = (req, res) => {
  res.render('add-expense');
};

exports.postAddExpense = async (req, res) => {
  const { title, amount, type, date, category, description } = req.body;
  
  try {
    const expense = new Expense({
      title,
      amount,
      type,
      date,
      category,
      description
    });
    
    await expense.save();
    res.redirect('/');
  } catch (err) {
    res.status(400).render('add-expense', { error: err.message });
  }
};

exports.getEditExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    res.render('edit-expense', { expense });
  } catch (err) {
    res.redirect('/');
  }
};

exports.postEditExpense = async (req, res) => {
  try {
    await Expense.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(400).render('edit-expense', { error: err.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
