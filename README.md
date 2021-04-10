# Projet Ember JS - Module M4103C_2

Ce projet consiste à faire une application web permettant aux commerçants de gérer leur magasin et la préparation des commandes des clients, notamment pour la vente à emporter.
Cette application se base sur le framework ember js, qui est un framework open source Javascript. Il s'appuie sur une architecture de type MVC (modèle-vue-contrôleur).
Il permet aux développeurs de créer des applications web suivant les bonnes pratiques du framework.
Pour l'application, vous aurez besoin d'une API Rest notamment pour la base de données. 
https://slamwiki2.kobject.net/frontoffice/emberjs

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

* `ember serve` dans votre dossier, exemple : M:\prog_web\client_riche\ember-tds\tds
* `ubiquity serve -p=8091` dans votre dossier où se trouve l'API Rest préalablement installée, exemple : M:\prog_web\client_riche\projet_store\store-api
* Démarrer Apache à partir du xampp-control
 
* Visitez votre application à cette adresse : [http://localhost:4200](http://localhost:4200).
* Visitez vos tests à cette adresse : [http://localhost:4200/tests](http://localhost:4200/tests).

## Principe et fonctionnement

Le framework ember js peut se découper en deux parties distinctes, notamment pour ce projet : les Templates et les Routes.
Ces deux parties sont "liées" entre elles, toute la partie visuelle va être créer dans le template, et toutes les actions vont être crées dans la route ou le controller associé.
Quand on crée une route, une template se crée automatiquement. Pour créer une fonction/action sur la route, il faut ajouter `@action` de `import { action } from '@ember/object';`, et dans le template `{{ action "prepare" @model}}`, tout ce qui est séparé d'un espace après l'action représente les paramètres, donc ici @model devient le paramètre de la fonction prepare.

* `ember g route new-route` : pour créer une route ('g' pour generate)
* `ember g controller new-controller` : pour créer un controller
* `ember g helper new-helper` : pour créer un helper
* `ember g serializer new-serializer` : pour créer un serializer
* `ember g component new-component` : pour créer un component
* `ember g model new-model` : pour créer un model
Les models reprennent le modèle physique de données du sujet, avec les différents champs des tables en tenant compte des liaisons entre les données.
Voir le mpd : https://slamwiki2.kobject.net/frontoffice/emberjs/td6#paniers 

Le fichier router.js répertorie toutes les routes du projet, et permet également d'ajouter des paramètres aux routes crées.


* Pour intégrer le framework Sementic-ui-ember et le jquery, nous avons lancer ces commandes dans notre terminal :
* `ember install semantic-ui-ember`
* `ember install @ember/jquery`
* `ember install @ember/optional-features`
* `ember feature:enable jquery-integration`

* Pour le système d'authentification, on crée un service `ember g service user-auth`. 
* Pour se connecter à notre API Rest externe, on crée un adaptateur et un serializer `ember g adapter application` `ember g serializer application`.
* On crée également des serializers pour la gestion des objets associés et des tables associations, car par exemple pour les sections, une liste de produit est associée à la réponse, ou quand il y a une association composite entre les identifiants ou les tables.
* Pour le listage des commandes à préparer, on utilise le module RSVP qui va permettre de retourner un ensemble d'objets dans une seule promise.

* J'ai également utilisé des outlets nommés, pour la partie du menu contenant toute les sections.

### En cas d'erreur ...

* Pour le lancement d'Apache : aller dans le dossier C:\xampp\mysql\data et supprimer un fichier de type aria_log.000000XX
* Mettre à jour l'API Rest pour éviter tout problème : `composer require phpmv/ubiquity:dev-master`
  
### Lancer les Tests

* `ember test`
* `ember test --server`

### Pour l'analyse statique du code :

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Construction du projet

* `ember build` (development)
* `ember build --environment production` (production)

## Liens utiles
  
* https://slamwiki2.kobject.net/frontoffice/emberjs
  * https://slamwiki2.kobject.net/frontoffice/emberjs/td6
  * https://slamwiki2.kobject.net/frontoffice/emberjs/td7
  * https://slamwiki2.kobject.net/frontoffice/emberjs/td8 
  
* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Extensions du navigateur de développement
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
