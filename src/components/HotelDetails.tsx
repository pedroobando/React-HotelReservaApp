import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { fetchHotel } from '../helpers';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Hotel } from '../interfaces';
import { BookingForm } from '.';

const APIROUTE = '/hotel/:id';
export const HotelDetails = () => {
  const [match, params] = useRoute(APIROUTE);
  const hotelId = parseInt(params?.id || '0');

  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery<Hotel>({
    queryKey: ['hotel', hotelId],
    queryFn: () => fetchHotel(hotelId),
  });

  if (isLoading) return <div>Loading...</div>;

  if (!match || !hotel) return <div>Error Feching Hotels Not Found..!</div>;

  if (error) return <div>Error Feching Hotels! {error.message}</div>;

  // console.log(JSON.stringify(match));
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e8' }}>
      <CardMedia sx={{ height: 140 }} image={hotel.image} title={hotel.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
      </CardContent>
      <CardActions>
        <BookingForm hotel={hotel} />
      </CardActions>
    </Card>
  );
};
