"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const { PORT, HOST, HOST_URL, EMAIL_SERVER, PASSWORD } = process.env;

assert(PORT, "port is required");
assert(HOST, "Host is required");
assert(HOST_URL, "Host_url is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  emailserver: EMAIL_SERVER,
  password: PASSWORD,
};
