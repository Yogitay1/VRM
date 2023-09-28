import http from "../http-common";
const getAll = () => {
  return http.get("/viewAllDrivers");
}; 
 const get = id => {
  return http.get(`/acceptOrReject/$/{typeResponse}`);   
}; 
const create = data => {
  return http.post("/addDriver", data);
};
const update = (id, data) => {
  return http.put(`/updateDriverNum/${id}`, data);
};
const remove = id => {
  return http.delete(`/deleteDriver/${id}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const DriverService = {
  get,
  getAll,
  create,
  update,
  remove,
  //removeAll,
  //findByTitle
  //you can add more actions here
};
export default DriverService;