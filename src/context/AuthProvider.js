import { createContext, useState } from "react";

const AuthContext = createContext({});
const VehicleContext = createContext({});
export const AuthProvider=({children})=>{
    //const [auth,setAuth]=useState({});
    const [vehicleId, setVehicleId] = useState({});
    const [bookingId, setBookingId] = useState({});
    return (<VehicleContext.Provider value={{vehicleId,setVehicleId, bookingId, setBookingId}}>
        {children}
    </VehicleContext.Provider>)
}
export default VehicleContext;