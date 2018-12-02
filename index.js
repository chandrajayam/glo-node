const express = require('express')
const app = express();

app.post('/', (req, res) => {
  res.send('Request Object body !', req.body)
});

app.listen(3000, () => {
  console.log('app listening on port 3000!')
});