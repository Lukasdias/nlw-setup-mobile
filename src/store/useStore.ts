import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getHabits, Habit } from './../services/api';
import { immer } from 'zustand/middleware/immer';

type State = {
  habits: {
    data: Habit[];
    isLoading: boolean;
    isError: unknown;
  };
};

type Actions = {
  fetchHabits: () => void;
  setLoadingHabits: (loading: boolean) => void;
  setErrorHabits: (error: unknown) => void;
};

export const useStore = create(
  devtools(
    immer<State & Actions>((set, get) => ({
      habits: {
        data: [],
        isLoading: false,
        isError: '',
      },
      fetchHabits: async () => {
        get().setLoadingHabits(true);
        try {
          const habits = await getHabits();
          set((state) => {
            state.habits.data = habits;
          });
        } catch (error) {
          get().setErrorHabits(error);
        } finally {
          get().setLoadingHabits(false);
        }
      },
      setLoadingHabits: (loading) => {
        set((state) => {
          state.habits.isLoading = loading;
        });
      },
      setErrorHabits: (error) => {
        set((state) => {
          state.habits.isError = error;
        });
      },
    }))
  )
);
