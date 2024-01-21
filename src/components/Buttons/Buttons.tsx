import React from "react";
import DigitButton from "./DigitButton/DigitButton";
import OperationDigit from "./OperationButton/OperationDigit";
import { ACTIONS } from "../../constants/actions";

interface ButtonsProps {
  dispatch: React.Dispatch<{ type: string }>;
}

const Buttons: React.FC<ButtonsProps> = ({ dispatch }) => {
  return (
    <>
      <button
        id="clear"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        className="span-two first-item"
      >
        <div className="glass-block-btn"></div>
        <div className="glass-block-btn2"></div>
        AC
      </button>
      <button
        id="delete"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIG })}
        className="item del"
      >
        <div className="glass-block-btn2"></div>
        <div className="glass-block-btn"></div>
        DEL
      </button>
      <OperationDigit id="pow" operation="^" dispatch={dispatch} styles="item pow" />
      <OperationDigit
        id="percentage"
        operation="%"
        dispatch={dispatch}
        styles="item percentage"
      />
      <OperationDigit
        id="divide"
        operation="÷"
        dispatch={dispatch}
        styles="item divide"
      />
      <OperationDigit id="sqrt" operation="√" dispatch={dispatch} styles="item sqrt" />
      <DigitButton id="seven" digit="7" dispatch={dispatch} styles="item" />
      <DigitButton id="nine" digit="9" dispatch={dispatch} styles="item" />
      <DigitButton id="eight" digit="8" dispatch={dispatch} styles="item" />
      <OperationDigit
        id="multiply"
        operation="×"
        dispatch={dispatch}
        styles="item multiply"
      />
      <DigitButton id="four" digit="4" dispatch={dispatch} styles="item" />
      <DigitButton id="five" digit="5" dispatch={dispatch} styles="item" />
      <DigitButton id="six" digit="6" dispatch={dispatch} styles="item" />
      <OperationDigit id="add" operation="+" dispatch={dispatch} styles="item add" />
      <DigitButton id="one" digit="1" dispatch={dispatch} styles="item" />
      <DigitButton id="two" digit="2" dispatch={dispatch} styles="item" />
      <DigitButton id="three" digit="3" dispatch={dispatch} styles="item" />
      <OperationDigit
        id="subtract"
        operation="-"
        dispatch={dispatch}
        styles="item subtract"
      />
      <DigitButton id="zero" digit="0" dispatch={dispatch} styles="item zero" />
      <DigitButton id="decimal" digit="." dispatch={dispatch} styles="item decimal" />
      <button
        id="equals"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className="span-two last-item"
      >
        <div className="glass-block-btn2"></div>
        <div className="glass-block-btn "></div>=
      </button>
    </>
  );
};

export default Buttons;
