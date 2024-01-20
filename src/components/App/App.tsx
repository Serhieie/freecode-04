import React, { useReducer, useEffect, useState } from "react";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import { reducer } from "../../helpers/reducer";

export const App: React.FC = () => {
  const [{ currentOperand = 0, previousOperand, operation, result = null }, dispatch] =
    useReducer(reducer, {});
  const [digitLimitMessage, setDigitLimitMessage] = useState<string | null>(null);

  useEffect(() => {
    if (currentOperand && currentOperand.toString().length > 14) {
      setDigitLimitMessage("Digit limit met");
      const timer = setTimeout(() => {
        setDigitLimitMessage(null);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentOperand]);

  return (
    <div className="calc-grid">
      <Display
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
        digitLimitMessage={digitLimitMessage}
        result={result}
      />
      <Buttons dispatch={dispatch} />
    </div>
  );
};
