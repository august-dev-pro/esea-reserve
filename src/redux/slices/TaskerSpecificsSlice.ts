import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITaskerSpecifics, TaskerSpecifics } from "@/ui/types";
import { API_URL } from "@/ui/api";

// Type for the slice state
interface TaskerSpecificsState {
  specifics: ITaskerSpecifics[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: TaskerSpecificsState = {
  specifics: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all Tasker specifics
export const fetchTaskerSpecifics = createAsyncThunk(
  "taskerSpecifics/fetchTaskerSpecifics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/taskerSpecifics`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasker specifics");
      }
      const data = await response.json();
      return data.allTaskerSpecifics as ITaskerSpecifics[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to add new Tasker specifics
export const addTaskerSpecifics = createAsyncThunk(
  "taskerSpecifics/addTaskerSpecifics",
  async (taskerSpecifics: TaskerSpecifics, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/taskerSpecifics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskerSpecifics),
      });
      if (!response.ok) {
        throw new Error("Failed to add tasker specifics");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to update Tasker specifics
export const updateTaskerSpecifics = createAsyncThunk(
  "taskerSpecifics/updateTaskerSpecifics",
  async (
    { id, data }: { id: string; data: Partial<TaskerSpecifics> },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${API_URL}/taskerSpecifics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update tasker specifics");
      }
      const updatedData = await response.json();
      return updatedData;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to delete Tasker specifics
export const deleteTaskerSpecifics = createAsyncThunk(
  "taskerSpecifics/deleteTaskerSpecifics",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/taskerSpecifics/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete tasker specifics");
      }
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Create TaskerSpecificsSlice
const taskerSpecificsSlice = createSlice({
  name: "taskerSpecifics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch specifics
    builder.addCase(fetchTaskerSpecifics.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTaskerSpecifics.fulfilled, (state, action) => {
      state.loading = false;
      state.specifics = action.payload;
    });
    builder.addCase(fetchTaskerSpecifics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Add specifics
    builder.addCase(addTaskerSpecifics.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addTaskerSpecifics.fulfilled, (state, action) => {
      state.loading = false;
      state.specifics.push(action.payload);
    });
    builder.addCase(addTaskerSpecifics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Update specifics
    builder.addCase(updateTaskerSpecifics.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateTaskerSpecifics.fulfilled, (state, action) => {
      state.loading = false;
      state.specifics = state.specifics.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
    builder.addCase(updateTaskerSpecifics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Delete specifics
    builder.addCase(deleteTaskerSpecifics.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteTaskerSpecifics.fulfilled, (state, action) => {
      state.loading = false;
      state.specifics = state.specifics.filter(
        (item) => item._id !== action.payload
      );
    });
    builder.addCase(deleteTaskerSpecifics.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default taskerSpecificsSlice.reducer;
