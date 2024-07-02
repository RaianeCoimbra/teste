const { mappingValues } = require("./mappingValues");
const verifyRules = require("./verifyRules");
const axios = require("axios");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { axios, ...verifyRules, delay, mappingValues };
