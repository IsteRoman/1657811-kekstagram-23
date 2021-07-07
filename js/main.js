import {uploadImage} from './upload.js';
import {getData} from './server.js';
import {overlayFilter} from './filter.js';

getData(overlayFilter);
uploadImage();
