import React from 'react';
import dynamic from 'next/dynamic';

const Book = dynamic(() => import('../../components/Bookflight/Book.jsx'), {
  ssr: false,
});

const FlightBooking = () => {
  return (
    <div>
        <Book/>
    </div>
  )
}

export default FlightBooking;