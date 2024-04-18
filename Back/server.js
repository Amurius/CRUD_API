const  express = require('express');
const cors = require('cors');
const app = express();
const celebrites = require('./celebrities.json');
const fs = require('fs');

app.use(cors());
app.use(express.json())

.get('/', (req, res) => {
  console.log(req.body);
  celebrites.push(req.body)
  res.status(200).json(celebrites)
})
.post('/Ajout', (req, res) => {
  const celebrite = [
    {nom: req.body.nom,  prenom: req.body.prenom, age: req.body.age}
  ];
  const celebrites = celebrites.push(celebrite)
  fs.writeFileSync('./celebrities.json', JSON.stringify(celebrites,null,2))
})

.listen(3000, () => {
  console.log("listening on port 3000");
})