import {
    ADD_BOOKING,
    GET_BOOKINGS,
    UPDATE_BOOKING,
    CANCEL_BOOKING,
    GET_ALL_CUSTOMER_BOOKINGS,
    
  }  from "../actions/types";

  const initialState = [];
  
  function bookingReducer(bookings = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case ADD_BOOKING:
        return [...bookings, payload];
        



      case GET_BOOKINGS:
        return payload;



      case UPDATE_BOOKING:
        return bookings.map((booking) => {
          if (booking.id === payload.id) {
            return {
              ...booking,
              ...payload,
            };
          } else {
            return booking;
          }
        });


        case GET_ALL_CUSTOMER_BOOKINGS:
          /* return bookings.map((booking) => {
            if (booking.customer.userId === payload.id) {
              return {
                ...booking,
                ...payload,
              };
            } else {
              return booking;
            }
          }); */
          return payload;
            
          

      case CANCEL_BOOKING:
        return bookings.filter(({ id }) => id!== payload.id);
      
      default:
        return bookings;
    }

    
  };
  export default bookingReducer;