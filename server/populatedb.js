// argument vector
const userArgs = process.argv.slice(2);

if (!userArgs[0].startsWith('mongodb')) {
    console.log('Error: You need to specify a valid mongodb URL as the first argument');
    return;
}

const mongoose = require("mongoose");
const mongoDB = userArgs[0];
const {User, Article, Follow} = require("./models/model");
const crypto = require("crypto")
const fs = require("fs");