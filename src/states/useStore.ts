import { create } from 'zustand';
import { Reservation } from '../interfaces';

interface HotelState {
  // blackBears: number;
  // polarBears: number;
  // pandaBears: number;

  // bears: Bear[];

  reservations: Reservation[];

  computed: { totalReservations: number };

  addReservation: (newReservation: Reservation) => void;
}

export const useStore = create<HotelState>()((set, get) => ({
  reservations: [],

  computed: {
    get totalReservations(): number {
      return get().reservations.length;
    },
  },

  addReservation: ({ hotel, dates }: Reservation) =>
    set((state) => ({ reservations: [...state.reservations, { hotel, dates }] })),
}));
