import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type State = {
  count: number;
  loading: boolean;
  error: boolean;
};

const initialState: State = {
  count: 0,
  loading: false,
  error: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    reset(state) {
      state.count = 0;
      state.loading = false;
      state.error = false;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const selectCount = (state: RootState) => state.counter.count;
export const selectError = (state: RootState) => state.counter.error;
export const selectLoading = (state: RootState) => state.counter.loading;

export const { increment, decrement, incrementBy, reset, setError, setLoading } =
  counterSlice.actions;
export default counterSlice.reducer;
