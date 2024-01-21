import { ACTIONS } from "../constants/actions";
import {
  handleAddDigit,
  handleClear,
  handleChooseOperation,
  handleEvaluate,
  handleDeleteDigit,
} from "./actionHandlers";

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return handleAddDigit(state, payload);
    case ACTIONS.CLEAR:
      return handleClear();
    case ACTIONS.CHOOSE_OPERATION:
      return handleChooseOperation(state, payload);
    case ACTIONS.EVALUATE:
      return handleEvaluate(state);
    case ACTIONS.DELETE_DIG:
      return handleDeleteDigit(state);
    default:
      return state;
  }
}
