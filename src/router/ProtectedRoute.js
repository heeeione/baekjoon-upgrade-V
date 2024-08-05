import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../App';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
