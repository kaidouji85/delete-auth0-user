const {ManagementClient} = require('auth0');
const dotenv = require('dotenv');

dotenv.config();
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN ?? '';
const AUTH0_USER_MANAGEMENT_APP_CLIENT_ID = process.env.AUTH0_USER_MANAGEMENT_APP_CLIENT_ID ?? '';
const AUTH0_USER_MANAGEMENT_APP_CLIENT_SECRET = process.env.AUTH0_USER_MANAGEMENT_APP_CLIENT_SECRET ?? '';
const DELETE_USER_ID = process.env.DELETE_USER_ID ?? '';

(async () => {
  const management = new ManagementClient({
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_USER_MANAGEMENT_APP_CLIENT_ID,
    clientSecret: AUTH0_USER_MANAGEMENT_APP_CLIENT_SECRET,
    scope: 'delete:users'
  });
  const ret = await management.deleteUser({id: DELETE_USER_ID});
  console.log(ret);
})();