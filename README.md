# TP Docker – Application de Gestion de Contacts (Multi-Conteneurs)

Ce projet implémente une application simple de gestion de contacts en utilisant une architecture multi-conteneurs avec **Docker Compose**. L’objectif initial du TP était de déployer les conteneurs manuellement afin d’en montrer la complexité, puis de simplifier le tout grâce à Docker Compose.

---

    ## 📁 Structure du projet
    
    tp-docker-contacts/
    ├── commandes.txt
    ├── docker-compose.yml
    ├── frontend/
    │ ├── Dockerfile
    │ ├── server.js
    │ ├── public/
    │ │ ├── index.html
    │ │ ├── app.js
    │ │ └── style.css
    │ └── package.json
    └── database/
    ├── Dockerfile
    └── init.sql

---

## ⚙️ Fonctionnement

L’application permet :
- d’ajouter un contact (nom + email),
- de l’enregistrer en base MySQL,
- d’afficher la liste des contacts.

Elle repose sur deux services :

| Service | Rôle |
|--------|------|
| **frontend** | Interface web + API Node.js |
| **database** | Base MySQL utilisée pour stocker les contacts |

---

## 🚀 Quick Start – Lancer l’application

Grâce à Docker Compose, une seule commande suffit :
docker compose up -d

Ensuite, accéder à l'application :
👉 http://localhost:3000

Pour arrêter les services :
docker compose down

- 🧪 Tests & Vérifications
Vérifier les conteneurs :
docker ps

Tester la communication entre services :
docker exec -it contacts-frontend ping contacts-db

- 📝 Résumé du Compte Rendu
Le TP montre les limites du déploiement manuel (multiples commandes, dépendances, réseau, persistance…).

Docker Compose simplifie la gestion :

création automatique du réseau

orchestration du démarrage

centralisation de la configuration

reproductibilité

Le fichier docker-compose.yml remplace désormais toutes les commandes manuelles.

- 📌 Conclusion
Docker Compose facilite considérablement le déploiement multi-conteneurs, offrant une solution claire, automatisée et facile à partager.
