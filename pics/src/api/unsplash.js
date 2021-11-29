import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wIFgUeJvWjWU9hy9txzFIi88poza4U6IIr5iCrbdhLA',
  },
});
