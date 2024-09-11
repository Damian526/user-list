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
  error: string | null;
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
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        filterType: keyof UserState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.filterType] = action.payload.value;
      state.filteredUsers = state.users.filter((user) => {
        return Object.entries(state.filters).every(([key, value]) => {
          const userValue = user[key as keyof User];
          if (typeof userValue === "string") {
            return userValue.toLowerCase().includes(value.toLowerCase());
          } else if (typeof userValue === "number") {
            return userValue.toString().includes(value);
          }
          return false;
        });
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
      .addCase(fetchUsers.rejected, (state,action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setFilter } = userSlice.actions;
export const selectFilteredUsers = (state: RootState) =>
  state.user.filteredUsers;
export default userSlice.reducer;
