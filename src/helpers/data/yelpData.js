import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.yelpKeys.databaseURL;
const authToken = apiKeys.yelpKeys.apiKey;

const getYelpCoffeeShops = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      location: 'Nashville',
      categories: 'coffee',
    },
  })
    .then((result) => {
      const someObj = result.data;
      console.log(someObj);
      resolve(someObj);
    })
    .catch((err) => reject(err));
});

export default { getYelpCoffeeShops };
