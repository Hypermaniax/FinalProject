const express = require('express');
const cors = require('cors');
const { router } = require('./routes/route');
const { connection } = require('./db/connection');
require('dotenv').config();

const app = express();

// Proper CORS configuration with specific origin
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL exactly as shown
  //   credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json('SUCESS')
})
app.use('/', router);


connection().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  });
})