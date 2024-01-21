import { evaluate } from "./evaluate";

function handleAddDigit(state, payload) {
  if (state.previousOperand === Infinity || state.currentOperand === Infinity) {
    return {};
  }
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
}
function handleClear() {
  return {};
}
function handleChooseOperation(state, payload) {
  if (state.previousOperand === Infinity || state.currentOperand === Infinity) {
    return {};
  }
  const sqrtResult = Number(
    evaluate({
      currentOperand: Number(state.currentOperand),
      previousOperand: null,
      operation: payload.operation,
      secondOperator: false,
    })
  );
  if (state.overwrite) {
    console.log("overwrite");

    if (payload.operation === "√") {
      console.log("overwrite √");
      return {
        ...state,
        previousOperand: null,
        result: sqrtResult,
        operation: null,
        currentOperand: Number(sqrtResult),
        overwrite: true,
      };
    }
    return {
      ...state,
      previousOperand: Number(state.result),
      result: null,
      operation: payload.operation,
      currentOperand: 0,
      overwrite: false,
    };
  }
  if (payload.operation === "√" && state.operation) {
    console.log(1);
    if (state.currentOperand) {
      console.log(2);
      return {
        ...state,
        previousOperand: Number(state.previousOperand),
        result: null,
        operation: state.operation,
        currentOperand: sqrtResult,
        overwrite: false,
      };
    }
    return state;
  }

  if (payload.operation === "√" && !state.operation) {
    console.log(3);
    if (!state.currentOperand && !state.previousOperand) {
      console.log(4);
      return state;
    }
    return {
      ...state,
      previousOperand: state.previousOperand,
      result: null,
      operation: state.operation,
      currentOperand: Number(
        evaluate({
          currentOperand: state.currentOperand,
          previousOperand: 0,
          operation: payload.operation,
          secondOperator: false,
        })
      ),
    };
  }

  // if (
  //   (payload.operation === "^" && !state.operation) ||
  //   (payload.operation === "%" && !state.operation)
  // ) {
  //   console.log(state);
  //   console.log(5);
  //   if (!state.currentOperand && !state.previousOperand) {
  //     console.log(6);
  //     return state;
  //   }
  //   return state;
  // }

  const currentOperand2 = state.currentOperand || "";
  if (typeof currentOperand2 === "string" && currentOperand2.endsWith(".")) {
    console.log(7);
    return state;
  }

  if (state.currentOperand === "-" && isNaN(payload.value)) {
    console.log(8);
    return state;
  }

  if (payload.operation === "-" && !currentOperand2 && state.previousOperand == null) {
    console.log(9);
    return {
      ...state,
      operation: null,
      currentOperand: payload.operation,
    };
  }
  if (state.currentOperand == null && state.previousOperand == null) {
    console.log(14);
    return state;
  }

  if (
    (state.operation === "+" &&
      state.currentOperand == null &&
      payload.operation === "-") ||
    (state.operation === "×" && state.currentOperand == null && payload.operation === "-")
  ) {
    console.log(10);

    return {
      ...state,
      previousOperand: state.previousOperand,
      operation: `${state.operation}${payload.operation}`,
      secondOperator: payload.operation,
    };
  }
  if (state.currentOperand == null) {
    console.log(11);
    return {
      ...state,
      operation: payload.operation,
    };
  }
  if (state.previousOperand == null && state.currentOperand) {
    console.log(12);
    return {
      ...state,
      operation: payload.operation,
      previousOperand: state.currentOperand,
      currentOperand: null,
    };
  }

  if (!state.currentOperand && !state.previousOperand) {
    console.log(state);
    console.log(14);
    return state;
  }
  return {
    ...state,
    previousOperand: Number(evaluate(state)),
    operation: payload.operation,
    currentOperand: null,
  };
}

function handleEvaluate(state) {
  if (state.previousOperand === Infinity || state.currentOperand === Infinity) {
    return {};
  }
  if (
    state.operation == null ||
    state.currentOperand == null ||
    state.previousOperand == null
  ) {
    return state;
  }
  if (
    (state.currentOperand && !state.previousOperand) ||
    (state.currentOperand && !state.operation)
  ) {
    return {
      state,
      currentOperand: 0,
    };
  }
  return {
    ...state,
    overwrite: true,
    previousOperand: null,
    operation: null,
    currentOperand: Number(evaluate(state)),
    result: Number(evaluate(state)),
  };
}

function handleDeleteDigit(state) {
  if (state.previousOperand === Infinity || state.currentOperand === Infinity) {
    return {};
  }
  const result = String(state.result || null);
  if (state.overwrite) {
    if (result) {
      return {
        ...state,
        result: null,
        overwrite: false,
        currentOperand: Number(result.slice(0, -1)),
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
    currentOperand: Number(currentOperand3.slice(0, -1)),
  };
}

export {
  handleAddDigit,
  handleClear,
  handleChooseOperation,
  handleEvaluate,
  handleDeleteDigit,
};
