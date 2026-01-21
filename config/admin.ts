export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },

  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },

  transfer: {
    enabled: true,
    token: {
      salt: env("STRAPI_TRANSFER_TOKEN_SALT"),
    },
  },
});
