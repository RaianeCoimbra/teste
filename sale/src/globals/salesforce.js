// salesforcePlugin.js
const fp = require("fastify-plugin");

async function initializeJsforceConnection(username, password, securityToken) {
  // Logic to initialize and authenticate the connection with jsforce
  const jsforce = require("jsforce");
  const connection = new jsforce.Connection();

  await connection.login(username, password + securityToken);

  return connection;
}

async function salesforcePlugin(fastify, options) {
  // Plugin initialization logic
  const { username, password, securityToken } = options;

  // Initialization logic for jsforce
  const jsforceConnection = await initializeJsforceConnection(
    username,
    password,
    securityToken
  );

  // Add the salesforce object to fastify
  fastify.decorate("salesforce", jsforceConnection);
}

module.exports = fp(salesforcePlugin);
