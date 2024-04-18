const  express = require('express');
const cors = require('cors');
const app = express();
const celebrites = require('./celebrities.json');
const fs = require('fs');

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json(celebrites)
})

app.post('/Ajout', (req, res) => {
  const celebrite =
    {nom: req.body.nom,  prenom: req.body.prenom, age: req.body.age};
  let zob = celebrites
  zob.push(celebrite)
  console.log(zob)
  fs.writeFileSync('./celebrities.json', JSON.stringify(zob,null,2))
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})