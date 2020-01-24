import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getLogsByShopId = (shopId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userLogs.json?orderBy="shopId"&equalTo="${shopId}"`)
    .then((result) => {
      const allLogsObj = result.data;
      const logs = [];
      if (allLogsObj != null) {
        Object.keys(allLogsObj).forEach((logId) => {
          const newLog = allLogsObj[logId];
          newLog.id = logId;
          logs.push(newLog);
        });
      }
      resolve(logs);
    })
    .catch((err) => reject(err));
});

const saveNewLog = (entryInfo) => axios.post(`${baseUrl}/userLogs.json`, entryInfo);

export default { getLogsByShopId, saveNewLog };
