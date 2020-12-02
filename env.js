// Read environment variables from "testenv" in the repository root. Override environment vars if they are already set.
const dotenv = require('dotenv');

dotenv.config();

process.env.CLIENT_ID = process.env.CLIENT_ID || process.env.SPA_CLIENT_ID;
