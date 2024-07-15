import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("token");
  return !token ? <Element {...rest} /> : <Navigate to="/about" />;
};

export default PublicRoute;
