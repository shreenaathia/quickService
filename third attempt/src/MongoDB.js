const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;

const dataService = require("./src/data-service.js");

const data = dataService(mongoDBConnectionString);