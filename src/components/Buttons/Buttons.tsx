import React from "react";
import DigitButton from "../../helpers/DigitButton";
import OperationDigit from "../../helpers/OperationDigit";
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
        AC
      </button>
      <button
        id="delete"
        onClick={() => dispatch({ type: ACTIONS.DELETE_DIG })}
        className="item"
      >
        DEL
      </button>
      <OperationDigit id="divide" operation="÷" dispatch={dispatch} styles="item" />
      <DigitButton id="seven" digit="7" dispatch={dispatch} styles="item" />
      <DigitButton id="eight" digit="8" dispatch={dispatch} styles="item" />
      <DigitButton id="nine" digit="9" dispatch={dispatch} styles="item" />
      <OperationDigit id="multiply" operation="×" dispatch={dispatch} styles="item" />
      <DigitButton id="four" digit="4" dispatch={dispatch} styles="item" />
      <DigitButton id="five" digit="5" dispatch={dispatch} styles="item" />
      <DigitButton id="six" digit="6" dispatch={dispatch} styles="item" />
      <OperationDigit id="add" operation="+" dispatch={dispatch} styles="item" />
      <DigitButton id="one" digit="1" dispatch={dispatch} styles="item" />
      <DigitButton id="two" digit="2" dispatch={dispatch} styles="item" />
      <DigitButton id="three" digit="3" dispatch={dispatch} styles="item" />
      <OperationDigit id="subtract" operation="-" dispatch={dispatch} styles="item" />
      <DigitButton id="decimal" digit="." dispatch={dispatch} styles="item" />
      <DigitButton id="zero" digit="0" dispatch={dispatch} styles="item" />
      <button
        id="equals"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        className="span-two last-item"
      >
        =
      </button>
    </>
  );
};

export default Buttons;
