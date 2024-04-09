import { useForm } from 'react-hook-form';
import { Typography, Input, Button } from '@mui/material';
import toast from 'react-hot-toast';
import { useStore } from '../states';
import { Hotel } from '../interfaces';

interface Props {
  hotel: Hotel;
}

export const BookingForm = ({ hotel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addReservation } = useStore((state) => state);

  // const totalReserv = useStore<number>((state) => state.computed.totalReservations);

  const onSubmit = (data: any) => {
    // console.log(data);
    addReservation({ hotel, dates: data });
    toast.success(`${hotel.name}, Reservation made..!`);
    // console.log(totalReserv);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" {...register('startDate', { required: true })} />
      {errors.startDate && <Typography style={{ color: 'red' }}>Start Date is required</Typography>}

      <br />
      <Input type="date" {...register('endDate', { required: true })} />
      {errors.endDate && <Typography style={{ color: 'red' }}>End Date is required</Typography>}
      <br />
      <br />
      <Button variant="contained" type="submit">
        Make Reservation
      </Button>
    </form>
  );
};
