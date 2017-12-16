import {PATH} from '../actions';

const initialState = {
    path: "/"
};

export default function (state = initialState, action) {
    switch(action.type){
        case PATH:
            const path = action.payload;

            return  path;
        default:
            return state;
    }
}