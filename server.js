const express = require('express');
const path = require('path');

const app = express();

// Sert les fichiers statiques de l'application Angular
app.use(express.static(path.join(__dirname, 'dist/eclessence')));

// Redirige toute requête vers l'index.html de l'application Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/eclessence', 'index.html'));
});

// Le serveur écoute sur le port configuré par Clever Cloud ou 8080 par défaut
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
