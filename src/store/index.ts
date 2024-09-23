import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector, useStore } from 'react-redux';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
