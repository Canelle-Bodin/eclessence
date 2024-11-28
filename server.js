const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier de construction Angular
const distDir = path.join(__dirname, 'dist/eclessence/browser');

// Servir les fichiers statiques générés par Angular
app.use(express.static(distDir));

// Pour toute requête, renvoyer le fichier index.html (single-page application)
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Le port sur lequel le serveur doit écouter
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
