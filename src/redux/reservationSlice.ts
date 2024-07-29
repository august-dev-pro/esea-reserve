import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  service: string;
  serviceId: number | null;
  date: string;
  address: string;
  option: string[];
  problemDescription: string;
  taskerId: string;
  agreement: string;
  jobType: string;
  wever: string;
}

const initialState: ReservationState = {
  service: "",
  serviceId: null,
  date: "",
  address: "",
  option: [],
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
    addOption: (state, action: PayloadAction<string>) => {
      if (!state.option.includes(action.payload)) {
        state.option.push(action.payload);
      }
    },
    addId: (state, action: PayloadAction<number>) => {
      state.serviceId = action.payload;
    },
  },
});

export const { updateReservation, resetReservation, addOption, addId } =
  reservationSlice.actions;
export default reservationSlice.reducer;
