import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { numbersAction } from "../store/get-numbers-slice";

const operatorButtons = [
  {
    id: "percentage",
    symbol: "%",
  },
  {
    id: "divide",
    symbol: "/",
  },
  {
    id: "multiply",
    symbol: "x",
  },
  {
    id: "subtract",
    symbol: "-",
  },
  {
    id: "add",
    symbol: "+",
  },
  {
    id: "comma",
    symbol: ",",
  },
];

const numberButton = [
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
    id: "0",
    symbol: 0,
  },
];

const evaluateButton = [
  {
    id: "evaluate",
    symbol: "=",
  },
];

const clearButton = [
  {
    id: "clear",
    symbol: "C",
  },
];

const backSpaceButton = [
  {
    id: "backspace",
    symbol: "<",
  },
];

const Buttons = () => {
  const enteredExpression = useSelector((state) => state.concatNumbers);
  const previousExpression = useSelector((state) => state.previousExpression);
  const operator = useSelector((state) => state.operator);
  const totalExpression = useSelector((state) => state.totalExpression);
  const totaledValue = useSelector((state) => state.totalNumber);
  const [evaluated, setEvaluated] = useState(false);
  const dispatch = useDispatch();

  let displayedNumbers = enteredExpression.map((expression) => expression);
  const prevNumbers = previousExpression.map((expression) => expression);

  console.log(displayedNumbers);
  const numberInputHandler = (e) => {
    dispatch(
      numbersAction.getNumbers({
        value: e.target.innerText,
      })
    );
  };

  const operatorInputHandler = (e) => {
    dispatch(
      numbersAction.getOperators({
        operator: e.target.innerText,
      })
    );
  };

  const evaluateHandler = (e) => {
    dispatch(
      numbersAction.getTotalNumber({
        evaluate: e.target.innerText,
      })
    );
    setEvaluated(true);
  };

  const clearDataHandler = (e) => {
    dispatch(numbersAction.clearData());
    setEvaluated(false);
  };

  const backSpaceHandler = (e) => {
    dispatch(numbersAction.delete());
  };

  return (
    // container
    <div className="grid place-content-center h-screen">
      {/* calculator */}
      <div className="h-fit w-fit border-2 shadow-lg rounded-lg m-4 flex flex-col bg-slate-50">
        <h1 className="ml-6 mt-3 text-2xl font-mono">Calculator</h1>
        <div className="flex flex-col mt-4">
          <div
            placeholder="0"
            className="box-content flex flex-col text-right truncate border border-stone-300  mx-5 py-2 text-4xl rounded-lg px-2 shadow-md w-72 h-16"
          >
            <span className="text-2xl">
              {prevNumbers}
              {operator}
              {totalExpression}
            </span>
            {!evaluated ? displayedNumbers : totaledValue}
          </div>
        </div>
        <div className="h-3/4 w-5/6 border-blue-500 mx-auto mt-10 grid grid-cols-4 gap-2 mb-10">
          <button
            className="text-2xl border-2 rounded-md shadow-sm"
            onClick={clearDataHandler}
          >
            {clearButton[0].symbol}
          </button>
          <button
            className="text-2xl border-2 rounded-md shadow-sm"
            onClick={backSpaceHandler}
          >
            {backSpaceButton[0].symbol}
          </button>
          {operatorButtons.map((button) => (
            <button
              key={button.id}
              className="text-2xl border-2 rounded-md shadow-sm"
              onClick={operatorInputHandler}
            >
              {button.symbol}
            </button>
          ))}
          {numberButton.map((button) => (
            <button
              key={button.id}
              className="text-2xl border-2 rounded-md shadow-sm"
              onClick={numberInputHandler}
            >
              {button.symbol}
            </button>
          ))}
          <button
            className="text-2xl border-2 rounded-md shadow-sm"
            onClick={evaluateHandler}
          >
            {evaluateButton[0].symbol}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
