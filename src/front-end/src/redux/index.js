import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import sessionSliceReducer from "./slices/sessionSliceReducer";
const store = configureStore({
  reducer: { session: sessionSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
