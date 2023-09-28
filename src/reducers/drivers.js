import {
    ADD_DRIVER,
  RETRIEVE_DRIVERS,
  UPDATE_DRIVER,
  DELETE_DRIVER,
  } from "../actions/types";
  const initialState = [];
  function driverReducer(drivers = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_DRIVER:
        return [...drivers, payload];
      case RETRIEVE_DRIVERS:
        return payload;
      case UPDATE_DRIVER:
        return drivers.map((driver) => {
          if (driver.id === payload.id) {
            return {
              ...driver,
              ...payload,
            };
          } else {
            return driver;
          }
        });
      case DELETE_DRIVER:
        return drivers.filter(({ id }) => id !== payload.id);
      
      default:
        return drivers;
    }
  };
  export default driverReducer;