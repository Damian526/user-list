import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { User } from "../../types/user";

export interface UserState {
  users: User[];
  filteredUsers: User[];
  status: "idle" | "loading" | "failed";
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  status: "idle",
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

// Create an asynchronous thunk for fetching user data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer to handle setting filters
    setFilter: (
      state,
      action: PayloadAction<{
        filterType: keyof UserState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.filterType] = action.payload.value;
      state.filteredUsers = state.users.filter((user) => {
        return Object.entries(state.filters).every(([key, value]) =>
          user[key as keyof User].toLowerCase().includes(value.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Export the setFilter action for use in components
export const { setFilter } = userSlice.actions;

// Selector to get the filtered users from the state
export const selectFilteredUsers = (state: RootState) =>
  state.user.filteredUsers;

// Export the user reducer to be included in the store
export default userSlice.reducer;
