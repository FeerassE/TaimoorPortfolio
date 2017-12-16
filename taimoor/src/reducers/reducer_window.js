import { RESIZE } from '../actions';

const initialState = {
    width: 0,
    height: 0
};

export default function (state = initialState, action) {
    switch(action.type){
        case RESIZE:
            const { width, height } = action.payload;

            return  {width, height};
        default:
            return state;
    }
}