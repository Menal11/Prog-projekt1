import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

import user from './routes/user.js';

app.use('/', function(req, res) {
   res.send('Hey ven');
});


app.listen(port, () => {
   console.log('Server listening on port ' + port);
 });

