// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const crypto = require('crypto');
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

   const id = crypto.randomBytes(6).toString('hex');
   const email = context.data.email;
   const password = context.data.password;

    context.data = {
      id,
      email,
      password
      // Set the user id
    };
    return context;
  };
};
