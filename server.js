const  express = require('express');
const cors = require('cors');
const app = express();
const celebrites = require('./celebrities.json');

app.use(cors());
app.use(express.json())

.post('/', (req, res) => {
  console.log(req.body);
  celebrites.push(req.body)
  res.status(200).json(celebrites)
})

.listen(3000, () => {
  console.log("listening on port 3000");
})