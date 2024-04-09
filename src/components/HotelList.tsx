import { useQuery } from '@tanstack/react-query';
import { fetchHotels } from '../helpers';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'wouter';
import { Hotel } from '../interfaces';

export const HotelList = () => {
  const {
    data: hotels,
    isLoading,
    error,
  } = useQuery<Hotel[]>({ queryKey: ['hotels'], queryFn: fetchHotels });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error Feching Hotels! {error.message}</div>;
  return (
    <>
      <Typography variant="h4" component="h2">
        Booking App
      </Typography>

      <Stack spacing={2}>
        {hotels!.map((hotel) => (
          <Link key={hotel.id} href={`/hotel/${hotel.id}`} style={{ textDecoration: 'none' }}>
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
                <Button size="small">See Details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </>
  );
};
