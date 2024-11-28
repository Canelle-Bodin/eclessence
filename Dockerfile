# Étape 1 : Construction de l'application Angular
FROM node:20 AS build

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copie du code source Angular et exécution du build de production
COPY .. ./
RUN npm run build --configuration production

# Étape 2 : Image de production pour l'application Express
FROM node:20

WORKDIR /app

# Copie des fichiers générés par la construction Angular (répertoire dist)
COPY --from=build /app/dist/eclessence/browser /app/dist/eclessence/browser

# Copie du code backend Express
COPY .. ./

# Installer uniquement les dépendances nécessaires pour la production (backend Express)
RUN npm install --production

# Expose le port 8080 pour l'application
EXPOSE 8080

# Démarrage de l'application Express
CMD ["node", "server.js"]
