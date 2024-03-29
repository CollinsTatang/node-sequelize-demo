import express from 'express';
import bodyParser from 'body-parser';
const db = require('./config/database');

db.authenticate()
   .then(() => console.log('Database Connected..'))
   .catch(err => console.log('Error: ' + err))


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200).send({
   message: 'welcome to The Blog API'
}));

app.listen(port, () => console.log(`Server is running on PORT ${port}`));