import http from '../http-common';
const create = ({data}) => {
    return http.post("/validateAdmin", data);
  };
  const createUser = ({data}) => {
    return http.post("/validateUser", data);
  };

  const LoginService = {
    createUser,
    create,


  };

  export default LoginService;