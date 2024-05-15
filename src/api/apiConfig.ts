import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.KlZmC5FipRl5oc1XvpJb_GyBOZYDsOePNTDdrcxI2jyEN11IuiupdOD1hiwY',
  },
});
