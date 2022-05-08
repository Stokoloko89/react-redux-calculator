import { createSlice } from "@reduxjs/toolkit";

const numbersSlice = createSlice({
  name: "numbers",
  initialState: {
    concatNumbers: [],
    previousExpression: [],
    totalExpression: [],
    totalNumber: 0,
    operator: null,
    firstValue: "0",
    secondValue: "0",
    expressionComplete: false,
  },
  reducers: {
    getNumbers(state, action) {
      let enteredButton = action.payload.value;
      state.concatNumbers.push(enteredButton);
    },

    getOperators(state, action) {
      if (state.concatNumbers.length !== 0 || state.expressionComplete) {
        // use the .push method to combine the previous displayed numbers with the operator
        // pushing an array to another as an object will result in error.
        state.previousExpression.push(state.concatNumbers);
        if (!state.expressionComplete) {
          state.firstValue =
            state.firstValue.slice(0, 0) + state.concatNumbers.join("");
          state.firstValue = parseFloat(state.firstValue);
          state.operator = action.payload.operator;
          state.concatNumbers = [];
        } else {
          state.expressionComplete = false;
          state.firstValue = state.totalNumber;
          state.previousExpression = [];
          state.totalExpression = [];
          state.previousExpression.push(state.firstValue);
          state.operator = action.payload.operator;
        }
      }
      console.log("First Value is", state.firstValue);
      console.log(state.concatNumbers);
    },

    getTotalNumber(state) {
      state.secondValue =
        state.secondValue.slice(0, 0) + state.concatNumbers.join("");
      state.secondValue = parseFloat(state.secondValue);
      state.totalExpression.push(state.secondValue);
      state.concatNumbers = [];
      state.expressionComplete = true;
      console.log("Second Value is", state.secondValue);
      switch (state.operator) {
        case "+":
          state.totalNumber = state.firstValue + state.secondValue;
          console.log("Total is", state.totalNumber);
          break;
        case "-":
          state.totalNumber = state.firstValue - state.secondValue;
          break;
        case "/":
          state.totalNumber = state.firstValue / state.secondValue;
          break;
        case "x":
          state.totalNumber = state.firstValue * state.secondValue;
          break;
        default:
          state.totalNumber = 0;
          break;
      }
      state.secondValue = [];
    },

    clearData(state) {
      state.concatNumbers = [];
      state.previousExpression = [];
      state.totalExpression = [];
      state.totalNumber = 0;
      state.operator = null;
      state.firstValue = "0";
      state.secondValue = "0";
    },

    delete(state) {
      state.concatNumbers.splice(state.concatNumbers.length - 1);
    },
  },
});

export const numbersAction = numbersSlice.actions;

export default numbersSlice.reducer;
