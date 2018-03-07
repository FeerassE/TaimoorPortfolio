import _ from 'lodash';
import { FETCH_HOMEPHOTO} from '../actions';


export default function (state = {}, action) {
    switch(action.type){
        case FETCH_HOMEPHOTO:
        console.log("Home photo payload" + action.payload.data.photo)
            return  {homephoto: action.payload.data.photo};
        default:
            return state;
    }
}