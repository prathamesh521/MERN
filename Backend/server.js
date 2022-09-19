const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 2000

const app = express();

app.listen(port, ()=> console.log(`server running on: ${port}`));