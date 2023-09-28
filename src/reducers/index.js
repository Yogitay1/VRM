import { combineReducers } from "redux";
import vehicles from "./vehicles";
import drivers from "./drivers";
import customers from "./customers";
import bookings from "./bookings";
import payments from "./payments";

export default combineReducers({
  vehicles, 
  drivers,
  customers,
  bookings,
  payments,
});