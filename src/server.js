import express from 'express';
import 'dotenv/config';
import db from './mysql.js';
import { routes } from './routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('mysql connected');
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
