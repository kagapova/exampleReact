import axios from 'axios';

export const SET_TOKEN_USER = 'SET_TOKEN_USER';

export const GET_TOKEN_USER = 'GET_TOKEN_USER';
export const GET_TOKEN_USER_SUCCESS = 'GET_TOKEN_USER_SUCCESS';
export const GET_TOKEN_USER_FAIL = 'GET_TOKEN_USER_FAIL';

export function setUserToken(token) {
    return {
        type: SET_TOKEN_USER,
        payload: {
            token: token
        }
    }
}

export const authUser = (token) => {
    return dispatch =>{
        dispatch(getTokenUser());

        let url = 'https://reqres.in/api/users/';

        axios
            .get(url + token)
            .then(response =>{
                dispatch(getTokenUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(getTokenUserFailure(error.status));
            });
    }
}

const getTokenUser = () => ({
    type: GET_TOKEN_USER
});

const getTokenUserSuccess = data => ({
    type: GET_TOKEN_USER_SUCCESS,
    payload: {
        ...data
    }
});

const getTokenUserFailure = error => ({
    type: GET_TOKEN_USER_FAIL,
    payload: {
        error
    }
});