const { authenticate } = require('@feathersjs/authentication').hooks;

const processMessage = require('../../hooks/process-message');

const populateUser = require('../../hooks/populate-user');

const processId = require('../../hooks/process-id');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processMessage(), processId()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
