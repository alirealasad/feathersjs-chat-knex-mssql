// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const crypto = require('crypto');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    context.data.id = crypto.randomBytes(6).toString('hex');
    return context;
  };
};
