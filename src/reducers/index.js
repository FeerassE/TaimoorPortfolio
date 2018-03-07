import { combineReducers } from 'redux';
import HomePhotoReducer from './reducer_homephoto';
import PhotosReducer from './reducer_photos';
import WindowReducer from './reducer_window';
import PathReducer from './reducer_route';


const rootReducer = combineReducers({
  homephoto: HomePhotoReducer,
  photos: PhotosReducer,
  window: WindowReducer,
  path: PathReducer,
});

export default rootReducer;