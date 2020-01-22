import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCoffeeShops = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/coffeeShops.json`)
    .then((result) => {
      const allShopsObj = result.data;
      const shops = [];
      if (allShopsObj != null) {
        Object.keys(allShopsObj).forEach((shopId) => {
          const newShop = allShopsObj[shopId];
          newShop.id = shopId;
          shops.push(newShop);
        });
      }
      resolve(shops);
    })
    .catch((err) => reject(err));
});

const getSingleShop = (shopId) => axios.get(`${baseUrl}/coffeeShops/${shopId}.json`);

export default { getCoffeeShops, getSingleShop };
