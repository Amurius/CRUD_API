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
  const { nom, prenom, age } = req.body;
  celebrites.push({ nom, prenom, age });
  fs.writeFile('./celebrities.json', JSON.stringify(celebrites), (err) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout")
    } else {
      res.status(200).send("Ajout réussi")
    }
  })
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
