import axios from 'axios';
import { setAlert } from './alert';
import {
    SEARCH_REQUEST, 
    SEARCH_SUCCESS, 
    SEARCH_FAILURE
} from './types';


//Get Current user Profile
export const searchProfile = () => async dispatch => {
    try{
        const res = await axios.get('/api/search/serach');

        dispatch ({
            type: SEARCH_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        dispatch({ 
            type: SEARCH_FAILURE,
            payload: { msg: err.response.statusText, status: err.response.status    }
        });
    }
};
