import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.yelpKeys.databaseURL;
const authToken = apiKeys.yelpKeys.apiKey;

const getYelpCoffeeShops = (userSearchParams, userLocation) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      term: `${userSearchParams}`,
      location: `${userLocation}`,
      radius: 30000,
      categories: 'coffee',
      sort_by: 'distance',
      limit: 50,
    },
  })
    .then((result) => {
      const shops = result.data;
      resolve(shops);
    })
    .catch((err) => reject(err));
});

export default { getYelpCoffeeShops };
