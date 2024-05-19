import axios from 'axios';

export const $axios = axios.create({
  baseURL: 'https://vip.soundmasters.pro/api/',
});
