import { createSlice } from '@reduxjs/toolkit'

const numbersSlice = createSlice({
    name: 'numbers',
    initialState: {
        concatNumbers: [],
        firstValue: null,
        secondValue: null,
        firstExpression: false,
        totalNumber: null,
        operator: null,
    },
    reducers: {
        getNumbers(state, action) {
            let enteredButton = (action.payload.value)
            if (typeof parseInt(enteredButton) === 'number' && state.firstValue !== null) {
                state.concatNumbers.push({ value: enteredButton.toString() })
            }
            if (enteredButton !== '=') {
                state.operator = (action.payload.value)
                state.firstValue = state.concatNumbers
                state.concatNumbers = []
                console.log(state.operator)
            }
            // if (typeof enteredButton !== 'number' && enteredButton === '=') {
            //     switch (enteredButton) {
            //         case '+':
            //             state.concatNumbers = state.firstValue + state.secondValue
            //             break;
            //         case '-':
            //             state.concatNumbers = state.firstValue - state.secondValue;
            //             break;
            //         case '/':
            //             state.concatNumbers = state.firstValue / state.secondValue;
            //             break;
            //         case 'x':
            //             state.concatNumbers = state.firstValue * state.secondValue;
            //             break;
            //         case '%':
            //             state.concatNumbers = (state.firstValue + state.secondValue) / 0.01;
            //             break;
            //         default:
            //             state.concatNumbers
            //             break;
            //     }
            // }
        }
    }
})

export const numbersAction = numbersSlice.actions

export default numbersSlice.reducer