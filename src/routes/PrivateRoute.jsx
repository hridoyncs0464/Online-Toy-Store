import React, {  useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);



    if(loading){
        return <Loading></Loading>;
    }
    if(user ){
        return children;
    }

    // redirect to login and save the attempted path in state.from
    return <Navigate  to="/auth/login"  state={{ from: location.pathname }}
  replace />;
};

export default PrivateRoute;
// state={location.pathname}