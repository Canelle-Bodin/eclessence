const express = require('express');
const path = require('path');
const fs = require('fs'); // Pour gérer les erreurs de fichiers

const app = express();

// Serve les fichiers statiques de l'application Angular
const staticPath = path.join(__dirname, 'dist/eclessence/browser');
app.use(express.static(staticPath));

// Redirige toute requête vers l'index.html de l'application Angular
app.get('/*', (req, res) => {
  const indexPath = path.join(staticPath, 'index.html');

  // Vérifie si le fichier existe avant de le servir
  fs.exists(indexPath, (exists) => {
    if (exists) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('404: Page Not Found');
    }
  });
});

// Le serveur écoute sur le port configuré par Clever Cloud ou 8080 par défaut
const PORT = process.env.PORT || 8080;
console.log(`Listening on port ${PORT}`);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
