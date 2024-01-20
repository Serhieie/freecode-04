import { ACTIONS } from "../constants/actions";
import { evaluate } from "./evaluate";

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return { ...state, currentOperand: payload.digit, overwrite: false };
      }
      const currentOperand = state.currentOperand || "";
      if (payload.digit === "0" && currentOperand === "0") return state;
      if (payload.digit === "." && currentOperand.includes(".")) return state;
      if (payload.digit === "." && !currentOperand) {
        return {
          ...state,
          currentOperand: "0.",
        };
      }
      return {
        ...state,
        currentOperand: `${currentOperand}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) return state;
      if (
        (state.operation === "+" && state.currentOperand == null) ||
        (state.operation === "×" && state.currentOperand == null)
      ) {
        return {
          ...state,
          operation: state.operation + payload.operation,
          secondOperator: payload.operation,
        };
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    case ACTIONS.DELETE_DIG:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: 0,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    default:
      return;
  }
}
