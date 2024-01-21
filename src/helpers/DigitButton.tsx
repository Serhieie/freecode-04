import React from "react";
import { ACTIONS } from "../constants/actions";

interface DigitButtonProps {
  id: string;
  digit: string;
  dispatch: React.Dispatch<{ type: string; payload: { digit: string } }>;
  styles: string;
}

const DigitButton: React.FC<DigitButtonProps> = ({ id, digit, dispatch, styles }) => {
  return (
    <button
      className={styles}
      id={id}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      <div className="glass-block-btn"></div>
      <div className="glass-block-btn2"></div>
      {digit}
    </button>
  );
};

export default DigitButton;
