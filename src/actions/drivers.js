import {
    ADD_DRIVER,
  RETRIEVE_DRIVERS,
  UPDATE_DRIVER,
  DELETE_DRIVER,
  
} from "./types";
import  DriverService from "../services/DriverService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addDriver = ({driverFirstName,driverLastName,driverAddress,driverMobileNumber,driverEmailId,driverLicenseNo,password,role,userId,username}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await DriverService.create({ driverFirstName,driverLastName,driverAddress,driverMobileNumber,driverEmailId,driverLicenseNo,password,role,userId,username });
    dispatch({
      type: ADD_DRIVER,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveDrivers = () => async (dispatch) => {
  try {
    const res = await DriverService.getAll();
    dispatch({
      type: RETRIEVE_DRIVERS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateDriver = (id, data) => async (dispatch) => {
  try {
    const res = await DriverService.update(id, data);
    dispatch({
      type: UPDATE_DRIVER,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteDriver = (id) => async (dispatch) => {
  try {
    await DriverService.remove(id);
    dispatch({
      type: DELETE_DRIVER,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};