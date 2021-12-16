import React from "react";
import { Redirect } from "react-router-dom";

export const ProtectedRoute = ({children}) => {

    let auth = "true";

    if (!auth){
        return <Redirect to="/"></Redirect>
    }
    return children;
}