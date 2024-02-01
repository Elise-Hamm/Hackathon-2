const express = require('express');
const cors = require('cors');
const app = express();
const port = 4747;

app.use(cors());
app.use(express.json());

const maisons = [
   { id: 1, nom: 'Maison A', prix: 300000, chambres: 3, salles_de_bain: 2 },
   { id: 2, nom: 'Maison B', prix: 500000, chambres: 4, salles_de_bain: 3 },
];

app.get('/api/maisons', (req, res) => {
   res.json(maisons);
});

app.get('/api/maisons/:id', (req, res) => {
   const maisonId = parseInt(req.params.id);
   const maison = maisons.find((maison) => maison.id === maisonId);

   if (!maison) {
      return res.status(404).json({ message: 'Maison non trouvée' });
   }

   res.json(maison);
});

app.post('/api/maisons', (req, res) => {
   const nouvelleMaison = req.body;
   nouvelleMaison.id = maisons.length + 1;
   maisons.push(nouvelleMaison);

   res.status(201).json(nouvelleMaison);
});

app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
