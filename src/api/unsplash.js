import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 146e565851efce2e88e64da976d65cbc4101444ed2a60cc1a427fe4e000035a5'
  }
});
