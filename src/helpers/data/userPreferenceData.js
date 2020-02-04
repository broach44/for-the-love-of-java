import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPreferencesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userPreferences.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const userObj = result.data;
      const users = [];
      if (userObj != null) {
        Object.keys(userObj).forEach((userId) => {
          const newUser = userObj[userId];
          newUser.id = userId;
          users.push(newUser);
        });
      }
      resolve(users);
    })
    .catch((err) => reject(err));
});

export default { getPreferencesByUid };
