import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Habit } from '../services/api';

type State = {
  habits: {
    data: Habit[];
    loading: boolean;
    error: boolean;
  };
  selectedDate: Date | null;
};

type Actions = {
  setLoadingHabits: (loading: boolean) => void;
  setErrorHabits: (error: boolean) => void;
  setHabits: (habits: Habit[]) => void;
  setSelectedDate: (date: Date | null) => void;
};

export const useStore = create(
  devtools(
    subscribeWithSelector(
      immer<State & Actions>((set, get) => ({
        habits: {
          data: [],
          loading: false,
          error: false,
        },
        selectedDate: null,
        isNewHabitModalOpen: false,
        isEditHabitModalOpen: false,
        setLoadingHabits: (loading) => {
          set((state) => {
            state.habits.loading = loading;
          });
        },
        setErrorHabits: (error) => {
          set((state) => {
            state.habits.error = error;
          });
        },
        setHabits: (habits) => {
          set((state) => {
            state.habits.data = habits;
          });
        },
        setSelectedDate: (date) => {
          set((state) => {
            state.selectedDate = date;
          });
        },
      }))
    )
  )
);
