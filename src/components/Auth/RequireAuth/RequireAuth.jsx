import React from 'react'
import { LOGGED_IN } from '../../../config/config'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


export  function RequireAuth() {
    const location = useLocation();

    return (
        LOGGED_IN
        ?<Outlet />
        :<Navigate to={"/"} state={{from: location}} replace />
  )
}
