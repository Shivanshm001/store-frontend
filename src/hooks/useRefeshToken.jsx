import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authAPI } from '../api/authAPI';
import { setAccessToken } from '../redux/auth/auth.slice';
export function useRefeshToken() {
    const dispatch = useDispatch();
    
    const refresh = async () => {
        const resp = await authAPI.get('/refresh', {
            withCredentials: true,
        });

        console.log("Refresh token response ",resp);
        dispatch(setAccessToken(resp?.data?.accessToken));
        return resp.data?.accessToken || null;
    }

    return refresh
}
