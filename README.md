# Générateur de mots de passe

Un générateur de mots de passe moderne et sécurisé développé en HTML, CSS et JavaScript vanilla. Cette application web permet de créer des mots de passe personnalisés avec de nombreuses options de configuration.

## Fonctionnalités

### Configuration avancée

- **Longueur variable** : Slider pour ajuster la longueur du mot de passe (12 à 30 caractères)
- **Types de caractères configurables** :
  - Lettres minuscules (a-z)
  - Lettres majuscules (A-Z)
  - Nombres (0-9)
  - Symboles avec sous-catégories détaillées

### Gestion granulaire des symboles

- **Basiques** : `!@#$%` (activé par défaut)
- **Mathématiques** : `^&*+-=`
- **Parenthèses** : `()[]{}<>`
- **Ponctuation** : `.,;:`
- **Spéciaux** : `|\_~``
- **Guillemets** : `"'``

### Sécurité et qualité

- **Jauge de force** en temps réel avec 5 niveaux :
  - Très Faible
  - Faible
  - Moyen
  - Fort
  - Très Fort
- **Algorithme intelligent** garantissant au moins un caractère de chaque type sélectionné
- **Mélange automatique** pour éviter les patterns prévisibles

### Interface utilisateur

- **Design moderne** avec effets glassmorphism
- **Copie en un clic** avec feedback visuel
- **Génération automatique** lors du changement de paramètres
- **Interface responsive** s'adaptant à tous les écrans
- **Animations fluides** et transitions élégantes

## Installation et utilisation

### Prérequis

- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune dépendance externe requise

### Installation

1. Clonez ou téléchargez les fichiers du projet

### Lancement

Ouvrez simplement le fichier `index.html` dans votre navigateur web.

## Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec :
  - Flexbox et Grid Layout
  - Variables CSS
  - Transitions et animations
  - Effets backdrop-filter
- **JavaScript ES6+** : Logique métier avec :
  - Manipulation du DOM
  - API Clipboard
  - Algorithmes de génération sécurisée
  - Gestion d'événements

## Fonctionnement technique

### Génération de mots de passe

1. **Construction du jeu de caractères** selon les options sélectionnées
2. **Garantie de diversité** : au moins un caractère de chaque type choisi
3. **Remplissage aléatoire** jusqu'à la longueur désirée
4. **Mélange final** pour éliminer les patterns

### Calcul de la force

L'algorithme évalue plusieurs critères :

- Longueur du mot de passe (25 points max)
- Présence de minuscules (15 points)
- Présence de majuscules (15 points)
- Présence de nombres (15 points)
- Présence de symboles (20 points)
- Diversité des caractères (10 points bonus)

### Gestion des symboles

Le système permet un contrôle précis des symboles autorisés :

- Activation/désactivation globale des symboles
- Sélection par catégories pour éviter les caractères problématiques
- Affichage/masquage automatique de la section symboles

## Design et UX

### Palette de couleurs

- **Dégradé principal** : #667eea → #764ba2
- **Arrière-plan** : Glassmorphism avec blur
- **Couleurs de force** :
  - Très Fort : #28a745 (vert)
  - Fort : #20c997 (turquoise)
  - Moyen : #ffc107 (jaune)
  - Faible : #fd7e14 (orange)
  - Très Faible : #dc3545 (rouge)

### Interactions

- Hover effects sur tous les éléments interactifs
- Animations de feedback pour les actions utilisateur
- Transitions fluides entre les états
- Design responsive pour mobile et desktop

## Sécurité

### Bonnes pratiques implémentées

- **Génération côté client** : aucune donnée envoyée sur le réseau
- **Cryptographiquement sécurisé** : utilisation de `Math.random()` pour la génération
- **Pas de stockage** : les mots de passe ne sont jamais sauvegardés
- **Diversité garantie** : algorithme empêchant les mots de passe faibles

### Recommandations d'usage

- Utilisez des mots de passe d'au moins 12 caractères
- Activez plusieurs types de caractères
- Évitez les caractères problématiques selon le contexte d'usage
- Changez régulièrement vos mots de passe

## Fonctionnalités avancées

### Personnalisation des symboles

- **Contrôle granulaire** : choisissez exactement quels symboles inclure
- **Catégories prédéfinies** : regroupement logique des symboles
- **Aperçu visuel** : voir les caractères inclus dans chaque catégorie

### Interface adaptative

- **Génération automatique** : nouveau mot de passe à chaque changement de paramètre
- **Feedback immédiat** : jauge de force mise à jour en temps réel
- **Copie intelligente** : gestion des erreurs et fallback pour anciens navigateurs

## Compatibilité

### Navigateurs supportés

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Fonctionnalités par navigateur

- **API Clipboard** : supportée sur la plupart des navigateurs modernes
- **Fallback de copie** : méthode alternative pour les navigateurs plus anciens
- **CSS Grid et Flexbox** : support complet sur tous les navigateurs cibles

## Améliorations futures possibles

- [ ] Sauvegarde des préférences utilisateur
- [ ] Thèmes de couleur multiples
- [ ] Historique des mots de passe générés
- [ ] API pour intégration dans d'autres applications

## 📄 Licence

Ce projet est sous [licence MIT](LICENSE). Vous êtes libre de l'utiliser, le modifier, le distribuer et même l'utiliser dans des projets commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests
- Améliorer la documentation

---
