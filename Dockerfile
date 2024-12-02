# Étape 1 : Construction de l'application Angular
FROM node:20 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le code source Angular et exécuter la construction de production
COPY . ./
RUN npm run build

# Étape 2 : Image de production pour l'application Express
FROM node:20

WORKDIR /app

# Copier les fichiers générés par la construction Angular (répertoire dist)
COPY --from=build /app/dist/eclessence/browser /app/dist/eclessence/browser

# Copier les fichiers backend (notamment server.js et package.json)
COPY server.js ./
COPY package.json package-lock.json ./

# Installer uniquement les dépendances nécessaires pour la production (backend Express)
RUN npm install --omit=dev

# Exposer le port 8080 pour l'application
EXPOSE 8080

# Démarrer l'application Express
CMD ["node", "server.js"]
