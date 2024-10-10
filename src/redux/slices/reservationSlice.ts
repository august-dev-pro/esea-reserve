import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IReservation, Reservation } from "@/ui/types";
import { API_URL } from "@/ui/api";

interface ReservationState {
  reservations: IReservation[];
  loading: boolean;
  error: string | null;
  // Ajoutez les propriétés option et serviceId si elles font partie de cet état
  options: string[]; // Exemple d'ajout
  serviceId: string | null; // Exemple d'ajout
  tempReservation: Reservation | null; // Stocker temporairement la réservation
}

const initialState: ReservationState = {
  reservations: [],
  loading: false,
  error: null,
  options: [], // Initialiser
  serviceId: null, // Initialiser
  tempReservation: null, // Initialiser
};

// Action pour sauvegarder temporairement la réservation
export const saveTempReservation = (reservation: Reservation) => {
  localStorage.setItem("tempReservation", JSON.stringify(reservation));
};

// Action pour récupérer la réservation temporaire
export const getTempReservation = () => {
  const reservation = localStorage.getItem("tempReservation");
  return reservation ? JSON.parse(reservation) : null;
};

// Fetch all reservations
export const fetchReservations = createAsyncThunk(
  "reservations/fetchAll",
  async () => {
    const response = await fetch(`${API_URL}/reservations`);
    if (!response.ok) {
      throw new Error("Failed to fetch reservations");
    }
    return (await response.json()) as IReservation[];
  }
);

// Fetch reservation by ID
export const fetchReservationById = createAsyncThunk(
  "reservations/fetchById",
  async (id: string) => {
    const response = await fetch(`${API_URL}/reservations/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch reservation");
    }
    return (await response.json()) as IReservation;
  }
);

// Add a new reservation
export const addReservation = createAsyncThunk(
  "reservations/add",
  async (reservationData: Reservation) => {
    const response = await fetch(`${API_URL}/reservation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse || "Failed to add reservation");
    }
    return await response.json();
  }
);

// Update a reservation
export const updateReservationNotLocal = createAsyncThunk(
  "reservations/update",
  async ({
    id,
    reservationData,
  }: {
    id: string;
    reservationData: Partial<Reservation>;
  }) => {
    const response = await fetch(`${API_URL}/reservations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationData),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to update reservation");
    }
    return (await response.json()) as IReservation;
  }
);

// Delete a reservation
export const deleteReservation = createAsyncThunk(
  "reservations/delete",
  async (id: string) => {
    const response = await fetch(`${API_URL}/reservations/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete reservation");
    }
    return id;
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
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
      if (!state.options.includes(action.payload)) {
        state.options.push(action.payload);
      }
    },
    addId: (state, action: PayloadAction<string>) => {
      state.serviceId = action.payload;
    },
    saveReservation: (state, action: PayloadAction<Reservation>) => {
      state.tempReservation = action.payload;
      saveTempReservation(action.payload); // Sauvegarde dans localStorage
    },
    loadTempReservation: (state) => {
      const tempReservation = getTempReservation();
      if (tempReservation) {
        state.tempReservation = tempReservation; // Charger la réservation
      }
    },
    clearTempReservation: (state) => {
      state.tempReservation = null;
      localStorage.removeItem("tempReservation"); // Supprimer de localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.loading = false;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch reservations";
        state.loading = false;
      })
      .addCase(fetchReservationById.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(
          (reservation) => reservation._id === action.payload._id
        );
        if (index > -1) {
          state.reservations[index] = action.payload;
        }
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add reservation";
      })
      .addCase(updateReservationNotLocal.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(
          (reservation) => reservation._id === action.payload._id
        );
        if (index > -1) {
          state.reservations[index] = action.payload;
        }
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter(
          (reservation) => reservation._id !== action.payload
        );
      });
  },
});

export const { updateReservation, resetReservation, addOption, addId } =
  reservationsSlice.actions;
export default reservationsSlice.reducer;
