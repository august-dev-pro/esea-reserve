import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  service: string;
  date: string;
  address: string;
  problemDescription: string;
  taskerId: string;
  agreement: string;
  jobType: string;
  wever: string;
}

const initialState: ReservationState = {
  service: "",
  date: "",
  address: "",
  problemDescription: "",
  taskerId: "",
  agreement: "",
  jobType: "",
  wever: "",
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateReservation: (
      state,
      action: PayloadAction<Partial<ReservationState>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetReservation: () => initialState,
  },
});

export const { updateReservation, resetReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
