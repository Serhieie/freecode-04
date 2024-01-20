import { formatNumber } from "./formatNumber";

export function evaluate({
  currentOperand,
  previousOperand,
  operation,
  secondOperator,
}: {
  currentOperand: string;
  previousOperand: string;
  operation: string;
  secondOperator: boolean;
}): string | number {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  let trueOp = operation;

  if (operation.length > 1) {
    trueOp = trueOp.slice(0, 1);
  }

  if (isNaN(prev) || isNaN(curr)) return "";

  let compitation: string | number = "";

  switch (trueOp) {
    case "×":
      compitation = prev * curr;
      if (secondOperator) {
        compitation = prev * -curr;
      }
      break;
    case "÷":
      compitation = prev / curr;
      break;
    case "+":
      if (secondOperator) {
        compitation = prev + -curr;
      }
      compitation = prev + curr;
      break;
    case "-":
      if (secondOperator) {
        console.log(true);
      }
      compitation = prev - curr;
      break;
    default:
      return "";
  }

  const numToReturn = formatNumber(compitation);

  return numToReturn;
}
