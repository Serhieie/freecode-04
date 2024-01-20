import React from "react";
import { ACTIONS } from "../constants/actions";

interface OperationDigitProps {
  id: string;
  operation: string;
  dispatch: React.Dispatch<{ type: string, payload: { operation: string } }>;
  styles: string;
}

const OperationDigit: React.FC<OperationDigitProps> = ({
  id,
  operation,
  dispatch,
  styles,
}) => {
  return (
    <button
      className={styles}
      id={id}
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {operation}
    </button>
  );
};

export default OperationDigit;
