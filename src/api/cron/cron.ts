import cron from 'node-cron';
import config from '../../config';
const axios = require('axios');



export default function cronJob() {
  cron.schedule('*/1 * * * *', async () => {
    console.log('This message will be logged every min');

    await axios.get(config.emailweburl)
    .then(response => {

        console.log("successfully api done");
      // Handle the successful response
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
  });
  
  
}
