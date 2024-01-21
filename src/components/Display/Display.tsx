import { DisplayWrapper } from "./Display.styled";

interface DisplayProps {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  result: null;
}

const Display: React.FC<DisplayProps> = ({
  previousOperand,
  currentOperand,
  operation,
  result,
}) => {
  return (
    <DisplayWrapper id="display" className="output calculator-glass">
      <div className="glass-block1"></div>
      <div className="glass-block2"></div>
      <div className="glass-block3"></div>
      <div className="prev-operand">
        {currentOperand && currentOperand.length >= 14 ? (
          <p className="limit-msg">Digit limit met</p>
        ) : previousOperand && operation ? (
          `${previousOperand}${operation}`
        ) : null}
      </div>

      {!result ? (
        <div className="curr-operand">{currentOperand}</div>
      ) : (
        <div className="curr-operand">{result}</div>
      )}
    </DisplayWrapper>
  );
};

export default Display;
