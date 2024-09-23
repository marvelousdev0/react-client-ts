import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

type State = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: State = {
  users: [] as User[],
  loading: false,
  error: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state: State, action: PayloadAction<User[]>) {
      return { ...state, users: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
  },
});

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await fetch('/api/v1/users');
  return response.json();
});

export const selectUsers = (state: RootState) => state.users.users;

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
