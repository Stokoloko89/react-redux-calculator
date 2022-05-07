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
  },
  reducers: {
    getNumbers(state, action) {
      let enteredButton = action.payload.value;
      state.concatNumbers.push(enteredButton);
    },
    getOperators(state, action) {
      if (state.concatNumbers.length !== 0) {
        // use the .push method to combine the previous displayed numbers with the operator
        // pushing an array to another as an object will result in error.
        state.previousExpression.push(state.concatNumbers);
        state.firstValue =
          state.firstValue.slice(0, 0) +
          state.concatNumbers.join("").toString();
        state.firstValue = parseInt(state.firstValue);
        state.operator = action.payload.operator;
        state.concatNumbers = [];
        console.log(state.firstValue);
      }
    },

    getTotalNumber(state, action) {
      state.secondValue =
        state.secondValue.slice(0, 0) + state.concatNumbers.join("").toString();
      state.secondValue = parseInt(state.secondValue);
      state.totalExpression.push(state.secondValue);
      state.concatNumbers = [];
      console.log(state.secondValue);
      switch (state.operator) {
        case "+":
          state.totalNumber = state.firstValue + state.secondValue;
          state.concatNumbers.push(state.totalNumber);
          console.log(state.totalNumber);
          break;
        case "-":
          state.totalNumber = state.firstValue - state.secondValue;
          console.log(state.totalNumber);
          break;
        case "/":
          state.totalNumber = state.firstValue / state.secondValue;
          console.log(state.totalNumber);
          break;
        case "x":
          state.totalNumber = state.firstValue * state.secondValue;
          console.log(state.totalNumber);
          break;
        case "%":
          state.totalNumber = (state.firstValue / state.secondValue) * 100;
          console.log(state.totalNumber);
          break;
        default:
          state.totalNumber = 0;
          break;
      }
    },

    clearData(state, action) {
      state.concatNumbers = [];
      state.previousExpression = [];
      state.totalExpression = [];
      state.totalNumber = 0;
      state.operator = null;
      state.firstValue = "0";
      state.secondValue = "0";
    },

    delete(state, action) {
      state.concatNumbers.splice(state.concatNumbers.length - 1);
    },
  },
});

export const numbersAction = numbersSlice.actions;

export default numbersSlice.reducer;
