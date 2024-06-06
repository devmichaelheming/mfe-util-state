/* eslint-disable */
const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: process.env.SONAR_HOST_URL,
    token: process.env.SONAR_TOKEN,
  },
  () => process.exit(),
);
