const express = require('express');
const path = require('path');
const app = express();

// Point vers le dossier où Angular compile les fichiers
const distFolder = path.join(__dirname, 'dist/eclessence/browser');
app.use(express.static(distFolder));

// Redirige toutes les requêtes vers index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Définir le port que Clever Cloud utilise (port 8080)
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
