import {
    ADD_BOOKING,
    GET_BOOKINGS,
    UPDATE_BOOKING,
    CANCEL_BOOKING,
    GET_ALL_CUSTOMER_BOOKINGS,
    
  } from "./types";
  
  
  
  
  import BookingService from "../services/BookingSerice";
  //we are creating action objects so that they can be dispatched to the store
  //addProduct --dispatch object from where -
  // when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
  //useDispatch hook , which will give us the constant of dispatch
  
  
  
  
  
  export const addBooking = ({customer,vehicle,
    bookingFromDate,bookedTillDate,bookingDescription,totalCost,distance}) => async (dispatch) => {
    try {
      //first the call to back end server is happening
      //data of product type and we receive server response
  
      const res = await BookingService.create({ customer,vehicle,bookingFromDate,bookedTillDate,bookingDescription,totalCost,distance});
      dispatch({
        type: ADD_BOOKING,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  
  
  
  export const viewAllBooking = () => async (dispatch) => {
    try {
      const res = await BookingService.getAll();
      dispatch({
        type: GET_BOOKINGS,
        payload:res.data,
      });
     
    
  }
  catch(err){return Promise.reject(err);}};
  
  export const getAllCustomerBookings = (id) => async (dispatch) => {
    try {
      const res = await BookingService.getAllCustomerBookings(id);
      dispatch({
        type: GET_ALL_CUSTOMER_BOOKINGS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  
  
  
  
  
  
  export const updateBooking = (id,data) => async (dispatch) => {
    try {
      const res = await BookingService.update(id,data);
      dispatch({
        type: UPDATE_BOOKING,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  
  
  
  
  
  
  
  
  export const  cancelBooking = (id) => async (dispatch) => {
    try {
      await BookingService.remove(id);
      dispatch({
        type: CANCEL_BOOKING,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };