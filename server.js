require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve les fichiers statiques de l'application Angular
const staticPath = path.join(__dirname, 'dist/eclessence/browser');
app.use(express.static(staticPath));

// Redirige toute requête vers l'index.html de l'application Angular
app.get('/*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));

// Configuration de Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint pour envoyer un email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des données reçues
  if (!name || !email || !message) {
    return res.status(400).send('Nom, email et message sont requis');
  }

  // Configuration de l'email à envoyer
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Message de ${name}`,
    text: `Vous avez reçu un message de ${name} (${email}):\n\n${message}`,
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message' });
    }
    console.log('Email envoyé:', info.response);
    return res.status(200).json({ success: true, message: 'Message envoyé avec succès' });
  });
});

// Le serveur écoute sur le port configuré par Clever Cloud ou 8080 par défaut
const PORT = process.env.PORT || 8080;
console.log(`Listening on port ${PORT}`);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
