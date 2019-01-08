"use strict";
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    logging: Boolean(process.env.TYPEORM_LOGGING),
    entities: ["./dist/entities/**/*.js"],
    migrations: [
        "./dist/migrations/*.js",
    ],
    cli: {
        migrationsDir: "./src/migrations",
    }
};

