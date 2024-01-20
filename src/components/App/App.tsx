import React, { useReducer } from "react";
import Display from "../Display/Display";
import { reducer } from "../../helpers/reducer";
import Buttons from "../Buttons/Buttons"; // Import the Buttons component

export const App: React.FC = () => {
  const [{ currentOperand = 0, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calc-grid">
      <Display
        currentOperand={currentOperand}
        previousOperand={previousOperand}
        operation={operation}
      />
      <Buttons dispatch={dispatch} />
    </div>
  );
};
