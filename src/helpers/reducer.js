import { ACTIONS } from "../constants/actions";
import { evaluate } from "./evaluate";

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        if (payload.digit === ".") {
          return {
            ...state,
            result: null,
            currentOperand: "0.",
            overwrite: false,
          };
        }
        return {
          ...state,
          result: null,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      const currentOperand = state.currentOperand || "";
      if (currentOperand.length > 14) return state;
      if (payload.digit === "0" && currentOperand === "0") return state;
      if (
        (state.currentOperand === "-" && payload.digit === ".") ||
        (state.currentOperand === "-" && payload.digit === "0")
      ) {
        return state;
      }
      if (
        (payload.digit === "0" && !currentOperand) ||
        (payload.digit === "0" && currentOperand === 0)
      )
        return {
          ...state,
          currentOperand: 0,
        };
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
      const sqrtResult = evaluate({
        currentOperand: state.currentOperand,
        previousOperand: null,
        operation: payload.operation,
        secondOperator: false,
      });
      if (state.overwrite) {
        if (payload.operation === "√") {
          return {
            ...state,
            previousOperand: null,
            result: sqrtResult,
            operation: null,
            currentOperand: sqrtResult,
            overwrite: true,
          };
        }
        return {
          ...state,
          previousOperand: state.result,
          result: null,
          operation: payload.operation,
          currentOperand: 0,
          overwrite: false,
        };
      }
      if (payload.operation === "√" && state.operation) {
        if (state.currentOperand) {
          return {
            ...state,
            previousOperand: state.previousOperand,
            result: null,
            operation: state.operation,
            currentOperand: sqrtResult,
            overwrite: false,
          };
        }
        return state;
      }

      if (payload.operation === "√" && !state.operation) {
        return {
          ...state,
          previousOperand: state.previousOperand,
          result: null,
          operation: state.operation,
          currentOperand: evaluate({
            currentOperand: state.currentOperand,
            previousOperand: null,
            operation: payload.operation,
            secondOperator: false,
          }),
        };
      }
      const currentOperand2 = state.currentOperand || "";
      if (typeof currentOperand2 === "string" && currentOperand2.endsWith(".")) {
        return state;
      }
      if (state.currentOperand === "-" && isNaN(payload.value)) {
        return state;
      }

      if (
        payload.operation === "-" &&
        !currentOperand2 &&
        state.previousOperand == null
      ) {
        return {
          ...state,
          operation: null,
          currentOperand: payload.operation,
        };
      }
      if (state.currentOperand == null && state.previousOperand == null) return state;

      if (
        (state.operation === "+" &&
          state.currentOperand == null &&
          payload.operation === "-") ||
        (state.operation === "×" &&
          state.currentOperand == null &&
          payload.operation === "-")
      ) {
        return {
          ...state,
          previousOperand: state.previousOperand,
          operation: `${state.operation}${payload.operation}`,
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
        result: evaluate(state),
      };
    case ACTIONS.DELETE_DIG:
      const result = String(state.result || null);
      if (state.overwrite) {
        if (result) {
          return {
            ...state,
            result: null,
            overwrite: false,
            currentOperand: result.slice(0, -1),
          };
        }
        return {
          ...state,
          result: null,
          overwrite: false,
          currentOperand: null,
        };
      }
      const currentOperand3 = String(state.currentOperand || 0);
      if (currentOperand3.length === 2 && currentOperand3.includes(".")) {
        return {
          ...state,
          currentOperand: 0,
        };
      }
      if (currentOperand3.length === 1) {
        return {
          ...state,
          currentOperand: 0,
        };
      }
      return {
        ...state,
        currentOperand: currentOperand3.slice(0, -1),
      };

    default:
      return;
  }
}
