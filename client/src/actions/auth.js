import axios from 'axios';
import { 
    REGISTER_SUCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_PROFILE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

//LOAD USER

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch ({
            type: USER_LOADED,
            payload: res.data
        });
  
    } catch (err) {
        dispatch ({
            type: AUTH_ERROR
        });
        
    }
};
//Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    
  const body = JSON.stringify({ email, password });
  
  try {
      const res = await axios.post('/api/auth', body, config);

      dispatch ({
          type: LOGIN_SUCCESS,
          payload: res.data
      });

      dispatch(loadUser()); 
  } catch (err) {
      const errors = err.response.data.errors;

      if(errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
          type: LOGIN_FAIL
      });
  }
};

//Register User
export const register = ({ 
    name, email, password
}) => async dispatch => {
const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
  const body = JSON.stringify({ name, email, password});
  
  try {
      const res = await axios.post('/api/users', body, config);

      dispatch ({
          type: REGISTER_SUCESS,
          payload: res.data
      });

      dispatch(loadUser()); 
  } catch (err) {
      const errors = err.response.data.errors;

      if(errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
          type: REGISTER_FAIL
      });
  }
};

//Logout and Clear everything
export const logout = () => dispatch => {
    dispatch ({ type: LOGOUT });
    dispatch ({ type: CLEAR_PROFILE });
};