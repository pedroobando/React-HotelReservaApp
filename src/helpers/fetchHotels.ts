const APIHOTEL = 'http://localhost:3001/hotels';

export const fetchHotels = async () => {
  const resp = await fetch(APIHOTEL);
  if (!resp.ok) {
    throw new Error('Network response was not OK');
  }

  return resp.json();
};

// const APIHOTEL = 'http://localhost:3001/hotels';

export const fetchHotel = async (id: number | null = 0) => {
  const resp = await fetch(`${APIHOTEL}/${id}`);
  if (!resp.ok) {
    throw new Error('Network response was not OK');
  }

  return resp.json();
};
