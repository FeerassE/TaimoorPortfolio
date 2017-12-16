import axios from 'axios';

const ROOT_URL = "https://api.500px.com/v1/photos"; 
const ALL_PHOTOS = "?feature=user&username=taimoorkhan5&sort=created_at&image_size=4&include_store=store_download&include_states=voted"; 
const CONSUMER_KEY = "umdECIWKLwpoE4FDJj3vjdnH8Kkwm2HUcALAPXwh";
const CONSUMER_SECRET = "A2xlpFDe4eChxps6qaAENKADTpeIFgBEbVqgWDeT";


export const FETCH_PHOTOS = 'fetch_photos';
export const RESIZE = 'resize';
export const PATH = 'path';


export function fetchPhotos() {
    const request = axios.get(`${ROOT_URL}${ALL_PHOTOS}&consumer_key=${CONSUMER_KEY}`)
    console.log('Request: ' + request);
    return{
        type: FETCH_PHOTOS,
        payload: request
    };
}

export function updateDimensions(width, height) {
    return {
        type: RESIZE,
        payload: {width, height} 
    }
}

export function updateCurrentRoute(path) {
    return {
        type: PATH,
        payload: path
    }
}

