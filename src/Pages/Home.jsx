import React from 'react';
import { Navigate } from 'react-router';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle("ToyTopia | Home");
    return (
        <div>
             <Navigate to="/"></Navigate>
        </div>
    );
};

export default Home;          