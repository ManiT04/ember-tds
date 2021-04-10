# Projet Ember JS - Module M4103C_2

Ce projet consiste à faire une application web permettant aux commerçants de gérer leur magasin et la préparation des commandes des clients, notamment pour la vente à emporter.
Cette application se base sur le framework ember js, qui est un framework open source Javascript. Il s'appuie sur une architecture de type MVC (modèle-vue-contrôleur).
Il permet aux développeurs de créer des applications web suivant les bonnes pratiques du framework.
Pour l'application, vous aurez besoin d'une API Rest notamment pour la base de donnée. 

## Prerequis

Vous aurez besoin des éléments suivants correctement installés sur votre ordinateur.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* API Rest, voir https://slamwiki2.kobject.net/frontoffice/emberjs/td6-api pour la mise en place de l'api.

## Installation

* `git clone <repository-url>` this repository
* `cd tds`
* `npm install`

## Running / Development

* `ember serve`
* Visitez votre application à cette adresse : [http://localhost:4200](http://localhost:4200).
* Visitez vos tests à cette adresse : [http://localhost:4200/tests](http://localhost:4200/tests).

### Lancer les Tests

* `ember test`
* `ember test --server`

### Pour l'analyse statique du code :

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building du projet

* `ember build` (development)
* `ember build --environment production` (production)

### Deploiement du projet 

Specify what it takes to deploy your app.

## Liens utiles

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Extensions du navigateur de développement
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
