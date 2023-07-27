import cron from 'node-cron';
import config from '../../config';
const axios = require('axios');



export default function cronJob() {
  cron.schedule('*/20 * * * * *', async () => {
    console.log('This message will be logged every min');

  

      





     axios.get(config.emailweburl)
    .then(async (response) => {

      const data ={
        text:JSON.stringify(response?.data)
      }


       axios.post(config.slackwebhookurl, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    


    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });




    

  });
  
  
}
