import _ from 'lodash';
import { FETCH_PHOTOS, BUTTON_CLICK } from '../actions';


export default function (state = {}, action) {
    switch(action.type){
        case FETCH_PHOTOS:
            return  _.mapKeys(action.payload.data.photos, 'id');
        default:
            return state;
    }
}