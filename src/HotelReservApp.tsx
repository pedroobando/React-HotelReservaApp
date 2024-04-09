import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import { Toaster } from 'react-hot-toast';
import { HotelDetails, HotelList } from './components';

const client = new QueryClient();

export const HotelReservApp = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={client}>
        <Switch>
          <Route path="/" component={HotelList} />
          <Route path="/hotel/:id" component={HotelDetails} />
        </Switch>
      </QueryClientProvider>
    </>
  );
};
