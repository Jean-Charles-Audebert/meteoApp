# Application Météo

Cette application web affiche les informations météo en temps réel pour une ville. Les données sont récupérées via l'API OpenWeatherMap et sont actualisées toutes les heures.

## Comment Utiliser l'Application

1. **Installation**

    Clonez le repository sur votre machine locale :
    ```bash
    git clone git@github.com:Jean-Charles-Audebert/meteoApp.git
    ```

2. **Configuration**

    Ajoutez votre clé API OpenWeatherMap au fichier `credentials.json`. Vous pouvez obtenir une clé API en vous inscrivant sur [OpenWeatherMap](https://openweathermap.org/api).

    ```json
    {
        "apiKey": "votre-clé-api"
    }
    ```

    Configurez la ville dans le fichier `config.json`.

    ```json
    {
        "latitude": 46.3091,
        "longitude": -0.4573
    }
    ```

3. **Lancement de l'Application**

    Ouvrez le fichier `index.html` dans un navigateur web 


4. **Observation des Données Météo**

    L'application affiche les informations suivantes :
    - Ville: 
    - Description de la météo
    - Température actuelle
    - Humidité
    - Vitesse du vent

    De plus, un icône météo personnalisé est affiché en fonction des conditions météo actuelles. Les icônes sont empruntées à [Abdellatif Laghjaj](https://github.com/abdellatif-laghjaj/weather-web-app)

## Technologies Utilisées

- HTML
- CSS
- JavaScript

## Structure des Fichiers

- `index.html` : Fichier principal de l'application.
- `style.css` : Feuille de style CSS pour la mise en page.
- `meteo.js` : Script JavaScript pour la récupération des données météo et la mise à jour de l'interface.
- `credentials.json` : Fichier de configuration contenant la clé API OpenWeatherMap.
- `config.json` : Fichier de configuration pour la ville de Niort.
- `img/` : Dossier contenant les icônes météo personnalisées.

## Remarques

- L'application utilise l'API OpenWeatherMap pour récupérer les données météo. Assurez-vous d'avoir une connexion Internet active.
- Les données météo sont mises à jour automatiquement toutes les heures.
- Pour des raisons de sécurité, ne partagez pas votre clé API OpenWeatherMap publiquement.

---