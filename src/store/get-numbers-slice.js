import { createSlice } from '@reduxjs/toolkit'

const numbersSlice = createSlice({
    name: 'numbers',
    initialState: {
        concatNumbers: [],
        previousExpression: [],
        totalNumber: null,
        operator: null,
    },
    reducers: {
        getNumbers(state, action) {
            let enteredButton = (action.payload.value)
            state.concatNumbers.push({ value: enteredButton })
        },
        getOperators(state, action) {
            let enteredOperator = (action.payload.value)
            console.log(enteredOperator)
            state.previousExpression = state.previousExpression.concat(state.concatNumbers)
            state.operator = enteredOperator
            state.previousExpression = state.previousExpression + state.operator
            state.concatNumbers = []
        },
        getTotalNumber(state, action) {
            if (action.payload.value === '=') {
                switch (state.operator) {
                    case '+':
                        state.concatNumbers = state.firstValue + state.secondValue
                        break;
                    case '-':
                        state.concatNumbers = state.firstValue - state.secondValue;
                        break;
                    case '/':
                        state.concatNumbers = state.firstValue / state.secondValue;
                        break;
                    case 'x':
                        state.concatNumbers = state.firstValue * state.secondValue;
                        break;
                    case '%':
                        state.concatNumbers = (state.firstValue + state.secondValue) / 0.01;
                        break;
                    default:
                        state.concatNumbers = state.previousExpression
                        break;
                }
            }

        }

    }
})

// if (enteredButton !== '=') {
//     state.operator = (action.payload.value)
//     state.firstValue = state.concatNumbers
// state.concatNumbers = []
//     console.log(state.operator)
// }

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

export const numbersAction = numbersSlice.actions

export default numbersSlice.reducer