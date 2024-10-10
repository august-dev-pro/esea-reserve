import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "./slices/reservationSlice";
import useReducer from "./slices/userSlice";
import serviceReducer from "./slices/serviceSlice";
import authReducer from "./slices/authSlice";
import servicesOptionsReducer from "./slices/servicesOptionsSlice";
import taskerSpecificsReducer from "./slices/TaskerSpecificsSlice";
export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    user: useReducer,
    service: serviceReducer,
    auth: authReducer,
    servicesOptions: servicesOptionsReducer,
    taskerSpecifics: taskerSpecificsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
