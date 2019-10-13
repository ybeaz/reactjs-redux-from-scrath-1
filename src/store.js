import { createStore, bindActionCreators } from "redux";
import { rootReducer } from "./reducer";
import * as Actions from "./actions";

const configureStore = () => {
  return createStore(rootReducer);
};

export const store = configureStore();

const { dispatch } = store;

export const actions = bindActionCreators(Actions, dispatch);
