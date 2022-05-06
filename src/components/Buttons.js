import { useSelector, useDispatch } from 'react-redux'
import { numbersAction } from '../store/get-numbers-slice'

const calcButtons = [
    {
        id: "percentage",
        symbol: "%",
    },
    {
        id: "clear",
        symbol: "C",
    },
    {
        id: "backspace",
        symbol: "<",
    },
    {
        id: "divide",
        symbol: "/",
    },
    {
        id: "7",
        symbol: 7,
    },
    {
        id: "8",
        symbol: 8,
    },
    {
        id: "9",
        symbol: 9,
    },
    {
        id: "multiply",
        symbol: "x",
    },
    {
        id: "4",
        symbol: 4,
    },
    {
        id: "5",
        symbol: 5,
    },
    {
        id: "6",
        symbol: 6,
    },
    {
        id: "subtract",
        symbol: "-",
    },
    {
        id: "1",
        symbol: 1,
    },
    {
        id: "2",
        symbol: 2,
    },
    {
        id: "3",
        symbol: 3,
    },
    {
        id: "add",
        symbol: "+",
    },
    {
        id: "comma",
        symbol: ",",
    },
    {
        id: "0",
        symbol: 0,
    },
    {
        id: "evaluate",
        symbol: "=",
    },
];

// let initialValue = 0;

const Buttons = () => {
    const initialExpression = useSelector(state => state.concatNumbers)
    // const removeZero = useSelector(state => state.enteredValues)
    const dispatch = useDispatch()

    console.log(initialExpression)

    const displayedNumbers = initialExpression.map(expression => expression.value)

    const inputValueHandler = (e) => {
        dispatch(numbersAction.getNumbers({
            value: e.target.innerText,
        }))
    }

    return (
        // container
        <div className="grid place-content-center h-screen">
            {/* calculator */}
            <div className="h-fit w-fit border-2 shadow-lg rounded-lg m-4 flex flex-col bg-slate-50">
                <h1 className="ml-6 mt-3 text-2xl font-mono">Calculator</h1>
                <div placeholder="0" className="truncate border border-stone-300 mt-7 mx-5 text-4xl rounded-lg px-2 shadow-md w-72 h-14 text-right">{displayedNumbers}</div>
                <div className="h-3/4 w-5/6 border-blue-500 mx-auto mt-10 grid grid-cols-4 gap-2 mb-10">
                    {calcButtons.map((button) => (
                        <button key={button.id} className="text-2xl border-2 rounded-md shadow-sm" onClick={inputValueHandler}>{button.symbol}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buttons