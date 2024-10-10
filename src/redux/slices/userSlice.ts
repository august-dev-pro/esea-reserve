import { API_URL } from "@/ui/api";
import { IUser } from "@/ui/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Fetch all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(`${API_URL}/user/`, { method: "GET" });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const result = await response.json();
  return result;
});

// Fetch a single user by ID
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id: string) => {
    const response = await fetch(`${API_URL}/user/${id}`, { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const result = await response.json();
    return result;
  }
);

// Add a new user
export const addUser = createAsyncThunk<IUser, IUser>(
  "users/addUser",
  async (user: IUser) => {
    const response = await fetch(`${API_URL}/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const errorResponse = await response.json();
    if (!response.ok) {
      throw new Error(`${errorResponse.stack.error}`);
    }
    const result = await response.json();
    return result;
  }
);

// Update an existing user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, user }: { id: string; user: any }) => {
    const response = await fetch(`${API_URL}/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    const result = await response.json();
    return result;
  }
);

// Delete a user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: string) => {
    const response = await fetch(`${API_URL}/user/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    return id;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as IUser[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch users";
        state.loading = false;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        // Handle individual user if needed
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch users";
        state.loading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user._id === action.payload.id
        );
        if (index > -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
