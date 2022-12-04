// this component is for the user to input their monthly expenses and income in the form. It displays in the main component

// create a form for the user to input their monthly expenses and income
// the form will have two columns: one for expenses and one for income
// the user will be able to add the name and the $ amount for each expense/income
// the input will be saved in the state and displayed on the screen
// the input can be edited or deleted
// the input will be saved in the database to be used in the budget results component

// TODO: create a custom hook to handle the input form for expenses and income

import { useEffect, useState } from "react";

const InputForm = () => {
  // create state for the input form
  const [input, setInput] = useState({
    expenseName: "",
    expenseAmount: "",
    incomeName: "",
    incomeAmount: "",
  });

  // create state for the expense list
  const [expenseList, setExpenseList] = useState([]);

  // create state for the income list
  const [incomeList, setIncomeList] = useState([]);

  // create a function to handle the input form
  const handleInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // create a function to handle the expense list
  const handleExpenseList = (e) => {
    e.preventDefault();
    // console.log(input.expenseName);
    // console.log(input.expenseAmount);
    setExpenseList([
      ...expenseList,
      {
        expenseName: input.expenseName,
        expenseAmount: input.expenseAmount,
      },
    ]);
    setInput({
      ...input,
      expenseName: "",
      expenseAmount: "",
    });
  };

  // create a function to handle the income list
  const handleIncomeList = (e) => {
    e.preventDefault();
    // console.log(input.incomeName);
    // console.log(input.incomeAmount);
    setIncomeList([
      ...incomeList,
      {
        incomeName: input.incomeName,
        incomeAmount: input.incomeAmount,
      },
    ]);
    setInput({
      ...input,
      incomeName: "",
      incomeAmount: "",
    });
  };

// useEffect when input is submitted to the expense list the new expense amount is added to the total expense amount and displayed in the total expense amount section, total difference between the total income and total expense is displayed in the total difference section, total percentage of the total expense compared to the total income is displayed in the total percentage section, total percentage of the total income compared to the total expense is displayed in the total percentage section

const [totalExpense, setTotalExpense] = useState(0);
const [totalIncome, setTotalIncome] = useState(0);
const [totalDifference, setTotalDifference] = useState(0);
const [totalExpensePercentage, setTotalExpensePercentage] = useState(0);
const [totalIncomePercentage, setTotalIncomePercentage] = useState(0);

useEffect(() => {
  let expenseTotal = 0;
  let incomeTotal = 0;
  let differenceTotal = 0;
  let expensePercentageTotal = 0;
  let incomePercentageTotal = 0;

  expenseList.forEach((expense) => {
    expenseTotal += parseInt(expense.expenseAmount);
  });
  setTotalExpense(expenseTotal);

  incomeList.forEach((income) => {
    incomeTotal += parseInt(income.incomeAmount);
  });
  setTotalIncome(incomeTotal);

  differenceTotal = incomeTotal - expenseTotal;
  setTotalDifference(differenceTotal);

  expensePercentageTotal = (expenseTotal / incomeTotal) * 100;
  setTotalExpensePercentage(expensePercentageTotal.toFixed(2));

  incomePercentageTotal = (incomeTotal / expenseTotal) * 100;
  setTotalIncomePercentage(incomePercentageTotal.toFixed(2));
}, [expenseList, incomeList]);

  // create a function to delete an expense
  const deleteExpense = (index) => {
    // console.log(index);
    const newExpenseList = [...expenseList];
    newExpenseList.splice(index, 1);
    setExpenseList(newExpenseList);
  };

  // create a function to delete an income
  const deleteIncome = (index) => {
    // console.log(index);
    const newIncomeList = [...incomeList];
    newIncomeList.splice(index, 1);
    setIncomeList(newIncomeList);
  };

  return (
    <div className="input-form">
      <div className="input-form-container">
        <div className="input-form-expense">
          <h2>Expenses</h2>
          <form onSubmit={handleExpenseList}>
            <input
              type="text"
              name="expenseName"
              placeholder="Expense Name"
              value={input.expenseName}
              onChange={handleInput}
              required
            />
            <input
              type="number"
              name="expenseAmount"
              placeholder="Expense Amount"
              value={input.expenseAmount}
              onChange={handleInput}
              required
            />
            <button type="submit">Add Expense</button>
          </form>
          <div className="expense-list">
            {expenseList.map((expense, index) => {
              return (
                <div className="expense-list-item" key={index}>
                  <p>{expense.expenseName}</p>
                  <p className="currency">${expense.expenseAmount}</p>
                  <button onClick={() => deleteExpense(index)}>X</button>
                </div>
              );
            }
            )}
          </div>
        </div>
        <div className="input-form-income">
          <h2>Income</h2>
          <form onSubmit={handleIncomeList}>
            <input
              type="text"
              name="incomeName"
              placeholder="Income Name"
              value={input.incomeName}
              onChange={handleInput}
              required
            />
            <input
              type="number"
              name="incomeAmount"
              placeholder="Income Amount"
              value={input.incomeAmount}
              onChange={handleInput}
              required
            />
            <button type="submit">Add Income</button>
          </form>
          <div className="income-list">
            {incomeList.map((income, index) => {
              return (
                <div className="income-list-item" key={index}>
                  <p>{income.incomeName}</p>
                  <p className="currency">${income.incomeAmount}</p>
                  <button onClick={() => deleteIncome(index)}>X</button>
                </div>
              );
            }
            )}
          </div>
        </div>
      </div>
      {/* 
// TODO: create a pill bar that displays the total expense amount, total income amount, total difference between the total expense and total income, total percentage of the total expense compared to the total income, total percentage of the total income compared to the total expense */}
      <div className="total-section">
        <div className="total-expense">
          <h2>Total Expenses</h2>
          <p className="currency">${totalExpense}</p>
        </div>
        <div className="total-income">
          <h2>Total Income</h2>
          <p className="currency">${totalIncome}</p>
        </div>
        <div className="total-difference">
          <h2>Total Cashflow</h2>
          <p className="currency">${totalDifference}</p>
        </div>
        {/* <div className="total-expense-percentage">
          <h2>Expense Percentage</h2>
          <p>{totalExpensePercentage}%</p>
        </div>
        <div className="total-income-percentage">
          <h2>Income Percentage</h2>
          <p>{totalIncomePercentage}%</p>
        </div> */}
      </div>
    </div>
  );
}

export default InputForm;
