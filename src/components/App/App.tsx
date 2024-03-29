// App.tsx
import React, { useReducer } from "react";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import { reducer } from "../../helpers/reducer";
import { AppWrapper } from "./App.styled";
import { State } from "../../helpers/actionHandlers/actionHandlers.types";

export const App: React.FC = () => {
  const [{ currentOperand = 0, previousOperand, operation, result = null }, dispatch] =
    useReducer(reducer, {} as State);

  return (
    <AppWrapper>
      <div className="glass-block-main"></div>
      <div className="glass-block-main2"></div>
      <div className="calc-grid">
        <Display
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operation={operation}
          result={result}
        />
        <Buttons dispatch={dispatch} />
      </div>
    </AppWrapper>
  );
};
