import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL ,
  socket:{
    tls: true,
    rejectUnauthorized: false 
  }
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

// Make sure Redis connects before server starts
await redisClient.connect();

export default redisClient;