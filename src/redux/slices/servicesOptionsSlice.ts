import { API_URL } from "@/ui/api";
import { IServiceOption } from "@/ui/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Fetch all service options
export const fetchServiceOptions = createAsyncThunk<IServiceOption[]>(
  "ServiceOptions/fetchServiceOptions",
  async () => {
    const response = await fetch(`${API_URL}/serviceOptions/`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch service options");
    }
    const result = await response.json();
    return result.serviceOptions;
  }
);

// Fetch service options by service ID
export const fetchServiceOptionsByServiceId = createAsyncThunk<
  IServiceOption[],
  string
>("ServiceOptions/fetchServiceOptionsByServiceId", async (serviceId) => {
  const response = await fetch(`${API_URL}/serviceOptions/${serviceId}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch service options for service");
  }
  const result = await response.json();
  return result.serviceOptions;
});

// Add a new service option
export const addServiceOption = createAsyncThunk<
  IServiceOption,
  IServiceOption
>("ServiceOptions/addServiceOption", async (serviceOption) => {
  const response = await fetch(`${API_URL}/serviceOptions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceOption),
  });
  if (!response.ok) {
    throw new Error("Failed to add service option");
  }
  const result = await response.json();
  return result;
});

// Update a service option
export const updateServiceOption = createAsyncThunk<
  IServiceOption,
  { id: string; serviceOption: IServiceOption }
>("ServiceOptions/updateServiceOption", async ({ id, serviceOption }) => {
  const response = await fetch(`${API_URL}/serviceOptions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceOption),
  });
  if (!response.ok) {
    throw new Error("Failed to update service option");
  }
  const result = await response.json();
  return result;
});

// Delete a service option
export const deleteServiceOption = createAsyncThunk<string, string>(
  "ServiceOptions/deleteServiceOption",
  async (id) => {
    const response = await fetch(`${API_URL}/serviceOptions/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete service option");
    }
    return id;
  }
);

interface ServiceOptionsState {
  serviceOptions: IServiceOption[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceOptionsState = {
  serviceOptions: [],
  loading: false,
  error: null,
};

const serviceOptionsSlice = createSlice({
  name: "ServiceOptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceOptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchServiceOptions.fulfilled,
        (state, action: PayloadAction<IServiceOption[]>) => {
          state.serviceOptions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchServiceOptions.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch service options";
        state.loading = false;
      })
      .addCase(
        fetchServiceOptionsByServiceId.fulfilled,
        (state, action: PayloadAction<IServiceOption[]>) => {
          state.serviceOptions = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchServiceOptionsByServiceId.rejected, (state, action) => {
        state.error =
          action.error.message ||
          "Failed to fetch service options by service ID";
        state.loading = false;
      })
      .addCase(
        addServiceOption.fulfilled,
        (state, action: PayloadAction<IServiceOption>) => {
          state.serviceOptions.push(action.payload);
        }
      )
      .addCase(addServiceOption.rejected, (state, action) => {
        state.error = action.error.message || "Failed to add service option";
        state.loading = false;
      })
      .addCase(
        updateServiceOption.fulfilled,
        (state, action: PayloadAction<IServiceOption>) => {
          const index = state.serviceOptions.findIndex(
            (option) => option._id === action.payload._id
          );
          if (index > -1) {
            state.serviceOptions[index] = action.payload;
          }
        }
      )
      .addCase(updateServiceOption.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update service option";
      })
      .addCase(
        deleteServiceOption.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.serviceOptions = state.serviceOptions.filter(
            (option) => option._id !== action.payload
          );
        }
      )
      .addCase(deleteServiceOption.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete service option";
      });
  },
});

export default serviceOptionsSlice.reducer;
