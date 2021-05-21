import axios from 'axios';
import { 
    FEATURE_LIST_REQUEST, 
    FEATURE_LIST_SUCCESS, 
    FEATURE_LIST_FAIL,
} from '../constants/featureConstants';

export const listFeatures = () => async (dispatch) => {
    try {
        dispatch({ type: FEATURE_LIST_REQUEST });
        const { data } = await axios.get('/api/products');
        dispatch({ type: FEATURE_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FEATURE_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};