import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ isAuthtenticated, children}) => {

    if(!isAuthtenticated) {
        return <Navigate to=" /login " replace />;
    }
    return children;
}

export default RutaProtegida;