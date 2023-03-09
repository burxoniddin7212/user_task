import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 9000;

export const pgConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

export const redisConfig = {
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
  db: 0, // Defaults to 0
};

