import{
    SET_TOKEN_USER,
    GET_TOKEN_USER,
    GET_TOKEN_USER_FAIL,
    GET_TOKEN_USER_SUCCESS
} from '../action/user';

const initialState = {
    token: null,
    loading: false,
    error: null,
    auth: null,
    first_name: null,
    last_name: null
}

export default function user(state = initialState, action) {
    switch(action.type){
        case SET_TOKEN_USER:
            return{
                ...state,
                token: action.payload.token,
            };
        case GET_TOKEN_USER:
            return{
                ...state,
                loading: true
            };
        case GET_TOKEN_USER_SUCCESS:
            return{
                ...state,
                token: action.payload.data.id,
                first_name: action.payload.data.first_name,
                last_name: action.payload.data.last_name,
                loading: false,
                auth: true,
                error: null
            };
        case GET_TOKEN_USER_FAIL:
            return{
                ...state,
                token: '',
                loading: false,
                auth: false,
                error: 'error request to api', //action.payload.error
            };
        default:
            return state;
    }
}