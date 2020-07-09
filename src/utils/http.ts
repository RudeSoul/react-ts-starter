import axios from 'axios';

import config from '../config';

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.baseURI,
  retryCount: 5,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
