import React from "react";

interface DisplayProps {
  previousOperand: string;
  currentOperand: string;
  operation: string;
}

const Display: React.FC<DisplayProps> = ({
  previousOperand,
  currentOperand,
  operation,
}) => {
  return (
    <div id="display" className="output">
      <div className="prev-operand">
        {previousOperand}
        {operation}
      </div>
      <div className="curr-operand">{currentOperand}</div>
    </div>
  );
};

export default Display;
