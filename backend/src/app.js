import express from 'express';
import cors from 'cors';

import data from './data';

const app = express();

// Settings
app.set('port', 5000);

app.use(cors());

app.use('/api/products', (req, res) => {
  res.send(data.products);
});

export default app;
