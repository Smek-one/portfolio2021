import React, { useState } from "react";

function ClearForm() {
  // our initial states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // this function for get our title value from the user.
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  // this function for get our price  value from the user.
  // price that we will get is string we have to convert it to number simply add + in front of the event.target.value like this +event.target.value
  function priceChangeHandler(event) {
    setEnteredPrice(+event.target.value);
  }
  // this function for get our date value from the user.
  // don't forget we we will get it as string .
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  // here we will gather our data title, price, and date
  let expensesData = {
    title: enteredTitle,
    price: enteredPrice,
    date: new Date(enteredDate), // we have to convert our date form string to date
  };
  // this function will clear our fields
  // we will call it inside submitFormHandler
  // after submit form we we will call submitFormHandler function and we will pass event as parameter to clearFields
  function clearFields(event) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    Array.from(event.target).forEach((e) => (e.value = ""));
  }
  // this function to submit form
  function submitFormHandler(event) {
    // we don't want our page to refresh
    event.preventDefault();
    // print expenses data
    console.log(expensesData);
    // clear the fields
    clearFields(event);
    //update our states
    // why we should update our states to empty string
    // if we have not done it we clears the fields but we still have the data in our states
    // if the  user submit the form without any data but our states still has the previous data
    //update title
    setEnteredTitle("");
    //update title
    setEnteredPrice("");
    //update title
    setEnteredDate("");
  }
  return (
    // our form
    <form onSubmit={submitFormHandler}>
      <label>Title</label>
      <input type="text" onChange={titleChangeHandler} />

      <label>Price</label>
      <input type="number" onChange={priceChangeHandler} />

      <label>Date</label>
      <input type="date" onChange={dateChangeHandler} />
      <button type="submit">submit</button>
    </form>
  );
}

export default ClearForm;
