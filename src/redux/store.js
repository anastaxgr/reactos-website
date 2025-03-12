import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import themeReducer from "@reducers/themeSlice";
import windowReducer from "@reducers/windowSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  windows: windowReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
