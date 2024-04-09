export interface Hotel {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Dates {
  startDate: string;
  endDate: string;
}

export interface Reservation {
  hotel: Hotel;
  dates: Dates;
}
