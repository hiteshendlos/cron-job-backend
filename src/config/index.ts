import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),
  /**
   * Your EMAL WEBSITE
   */
  emailweburl:process.env.EMAILWEB,

  /**
   * Slack webhhok 
   */
  slackwebhookurl:process.env.SLACK_WEBHOOK_URL,


  /**
   * API configs
   */
  api: {
    prefix: '/api/v1/',
  },


};
