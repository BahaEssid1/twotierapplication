# Utiliser une image officielle Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json
COPY package.json .

# Installer les dépendances
RUN npm install

# Copier tout le code du frontend
COPY . .

# Exposer le port utilisé par le serveur Node.js
EXPOSE 3000

# Lancer le serveur
CMD ["npm", "start"]
