import { API_URL } from "@/ui/api";
import { IService, setIService } from "@/ui/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Fetch all services
export const fetchServices = createAsyncThunk<IService[]>(
  "Services/fetchServices",
  async () => {
    const response = await fetch(`${API_URL}/service/`, { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    const result = await response.json();
    return result.services;
  }
);

// Fetch a single service by ID
export const fetchServiceById = createAsyncThunk<IService, string>(
  "Services/fetchServiceById",
  async (id) => {
    const response = await fetch(`${API_URL}/service/${id}`, { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch service");
    }
    const result = await response.json();
    return result;
  }
);

// Add a new service
export const addService = createAsyncThunk<IService, any>(
  "Services/addService",
  async (service) => {
    const response = await fetch(`${API_URL}/service/`, {
      method: "POST",
      body: service,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`${errorResponse.stack.error}`);
    }
    const result = await response.json();
    return result;
  }
);

// Update an existing service
export const updateService = createAsyncThunk<
  IService,
  { id: string; service: IService }
>("Services/updateService", async ({ id, service }) => {
  const response = await fetch(`${API_URL}/service/${id}`, {
    method: "PUT",
    body: JSON.stringify(service),
  });
  if (!response.ok) {
    throw new Error("Failed to update service");
  }
  const result = await response.json();
  return result;
});

// Delete a service
export const deleteService = createAsyncThunk<string, string>(
  "Services/deleteService",
  async (id) => {
    const response = await fetch(`${API_URL}/service/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete service");
    }
    return id;
  }
);

const serviceSlice = createSlice({
  name: "Services",
  initialState: {
    services: [] as IService[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchServices.fulfilled,
        (state, action: PayloadAction<IService[]>) => {
          state.services = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchServices.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch services";
        state.loading = false;
      })
      .addCase(
        fetchServiceById.fulfilled,
        (state, action: PayloadAction<IService>) => {
          // Handle individual service if needed
        }
      )
      .addCase(
        addService.fulfilled,
        (state, action: PayloadAction<IService>) => {
          state.services.push(action.payload);
        }
      )
      .addCase(
        updateService.fulfilled,
        (state, action: PayloadAction<IService>) => {
          const index = state.services.findIndex(
            (service) => service._id === action.payload._id
          );
          if (index > -1) {
            state.services[index] = action.payload;
          }
        }
      )
      .addCase(
        deleteService.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.services = state.services.filter(
            (service) => service._id !== action.payload
          );
        }
      );
  },
});

export default serviceSlice.reducer;
