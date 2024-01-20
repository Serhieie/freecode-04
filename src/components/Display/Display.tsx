import React from "react";

interface DisplayProps {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  digitLimitMessage: string | null;
  result: null;
}

const Display: React.FC<DisplayProps> = ({
  previousOperand,
  currentOperand,
  operation,
  digitLimitMessage,
  result,
}) => {
  return (
    <div id="display" className="output">
      <div className="prev-operand">
        {previousOperand}
        {operation}
      </div>
      {!result ? (
        digitLimitMessage ? (
          <p className="limit-msg">{digitLimitMessage}</p>
        ) : (
          <div className="curr-operand">{currentOperand}</div>
        )
      ) : (
        <div className="curr-operand">{result}</div>
      )}
    </div>
  );
};

export default Display;
