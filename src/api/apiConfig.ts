import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.uayjzcnDfNE5YEy1vSyLbaxeup5cZQ1O5II9cET2Spd-N9wWMWa9RpcNYrqk',
  },
});
