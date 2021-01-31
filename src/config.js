const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IF4G2GppBZb1gBI9wYKsd2F34dthQ9LxURAwPEDLZi5zWL2IfhKeILQVdyxEP077Jrr3B3wIY3qGHL7M0xptsNW00AREuBUZD",
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-upload-belovol",
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://jiazz8apzd.execute-api.eu-central-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_IpvgcD4If",
      APP_CLIENT_ID: "8j5ho7nsmqtdt4ujdt1ignrg",
      IDENTITY_POOL_ID: "eu-central-1:6a2e4294-1c7f-40d3-845e-f3da60ee0d44",
    },
  };
  
  export default config;