# Guide de Contribution

Merci de votre intérêt pour contribuer à Kev Studio ! 🎉

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Signaler un bug](#signaler-un-bug)
- [Suggérer une fonctionnalité](#suggérer-une-fonctionnalité)
- [Processus de Pull Request](#processus-de-pull-request)
- [Standards de code](#standards-de-code)
- [Structure du projet](#structure-du-projet)

## 🤝 Code de conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite :

- Soyez respectueux et inclusif
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est meilleur pour la communauté
- Faites preuve d'empathie envers les autres membres

## 🚀 Comment contribuer

### Prérequis

- Connaissance de HTML, CSS et JavaScript
- Git installé sur votre machine
- Un éditeur de code (VS Code recommandé)
- Un navigateur moderne pour tester

### Configuration de l'environnement

1. **Fork le projet**
   ```bash
   # Cliquer sur "Fork" en haut à droite sur GitHub
   ```

2. **Cloner votre fork**
   ```bash
   git clone https://github.com/VOTRE_USERNAME/kev-studio-main.git
   cd kev-studio-main
   ```

3. **Créer une branche**
   ```bash
   git checkout -b feature/ma-nouvelle-fonctionnalite
   # ou
   git checkout -b fix/correction-bug
   ```

4. **Installer les extensions VS Code recommandées**
   - Ouvrir le projet dans VS Code
   - Accepter l'installation des extensions recommandées

5. **Lancer un serveur local**
   ```bash
   # Option 1 : Live Server (VS Code)
   # Clic droit sur index.html > Open with Live Server
   
   # Option 2 : Python
   python -m http.server 8000
   
   # Option 3 : Node.js
   npx serve
   ```

## 🐛 Signaler un bug

1. Vérifier que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/kevstudio/kev-studio-main/issues)
2. Créer une nouvelle issue en utilisant le template "Bug Report"
3. Fournir un maximum de détails :
   - Description claire du bug
   - Étapes pour reproduire
   - Comportement attendu vs actuel
   - Captures d'écran si pertinent
   - Environnement (OS, navigateur, version)
   - Messages d'erreur de la console

## 💡 Suggérer une fonctionnalité

1. Vérifier que la fonctionnalité n'a pas déjà été suggérée
2. Créer une nouvelle issue en utilisant le template "Feature Request"
3. Expliquer clairement :
   - Le problème que ça résout
   - La solution proposée
   - Les alternatives considérées
   - Des exemples de cas d'usage

## 🔄 Processus de Pull Request

### Avant de commencer

1. Créer ou commenter une issue pour discuter des changements
2. Attendre l'approbation avant de commencer le travail
3. S'assurer que votre fork est à jour avec la branche principale

### Faire vos changements

1. **Créer une branche**
   ```bash
   git checkout -b type/description-courte
   ```
   
   Types de branches :
   - `feature/` : nouvelle fonctionnalité
   - `fix/` : correction de bug
   - `docs/` : documentation
   - `style/` : formatage, style
   - `refactor/` : refactoring
   - `test/` : ajout de tests
   - `chore/` : maintenance

2. **Faire vos modifications**
   - Suivre les [standards de code](#standards-de-code)
   - Tester sur plusieurs navigateurs
   - Tester le responsive (mobile, tablette, desktop)
   - Vérifier la console pour les erreurs

3. **Commiter vos changements**
   ```bash
   git add .
   git commit -m "type: description claire du changement"
   ```
   
   Types de commits :
   - `feat:` nouvelle fonctionnalité
   - `fix:` correction de bug
   - `docs:` documentation
   - `style:` formatage
   - `refactor:` refactoring
   - `perf:` amélioration de performance
   - `test:` tests
   - `chore:` maintenance

   Exemples :
   ```bash
   git commit -m "feat: ajouter animation au scroll pour les services"
   git commit -m "fix: corriger le menu mobile qui ne se ferme pas"
   git commit -m "docs: mettre à jour le README avec nouvelles instructions"
   ```

4. **Pousser vers votre fork**
   ```bash
   git push origin votre-branche
   ```

### Créer la Pull Request

1. Aller sur GitHub et créer une Pull Request
2. Utiliser le template fourni
3. Décrire clairement :
   - Ce qui a été changé et pourquoi
   - Comment tester les changements
   - Captures d'écran si pertinent
   - Issues liées (ex: "Fixes #123")

4. Attendre la review
   - Répondre aux commentaires
   - Faire les modifications demandées
   - Être patient et respectueux

### Checklist avant la PR

- [ ] Le code fonctionne sans erreur
- [ ] Testé sur Chrome, Firefox, Safari
- [ ] Testé sur mobile et desktop
- [ ] Pas d'erreurs dans la console
- [ ] Le code suit les standards du projet
- [ ] La documentation est à jour si nécessaire
- [ ] Les commits sont clairs et bien formatés
- [ ] La branche est à jour avec main

## 📏 Standards de code

### HTML

```html
<!-- ✅ Bon -->
<section class="services" id="services">
    <div class="container">
        <h2 class="section-title">Services</h2>
    </div>
</section>

<!-- ❌ Mauvais -->
<section class=services id=services>
<div class=container>
<h2 class=section-title>Services</h2></div></section>
```

**Règles :**
- Indentation : 2 espaces
- Toujours fermer les balises
- Utiliser des guillemets doubles pour les attributs
- Attributs dans l'ordre : class, id, data-*, autres
- Ajouter des commentaires pour les sections importantes

### CSS

```css
/* ✅ Bon */
.service-card {
    background: var(--color-bg-card);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    transition: all var(--transition-base);
}

/* ❌ Mauvais */
.service-card{background:#141414;padding:4rem;border-radius:1.5rem;}
```

**Règles :**
- Indentation : 2 espaces
- Une déclaration par ligne
- Utiliser les variables CSS
- Ordre des propriétés : positionnement, box model, typographie, visuel, autres
- Grouper les propriétés similaires
- Commenter les sections

### JavaScript

```javascript
// ✅ Bon
const navbar = document.getElementById('navbar');

function handleScroll() {
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ❌ Mauvais
var navbar=document.getElementById('navbar');
function handleScroll(){const scrollPosition=window.pageYOffset;if(scrollPosition>100){navbar.classList.add('scrolled');}else{navbar.classList.remove('scrolled');}}
```

**Règles :**
- Indentation : 2 espaces
- Utiliser `const` et `let`, pas `var`
- Noms de variables en camelCase
- Fonctions descriptives et courtes
- Commenter le code complexe
- Éviter les répétitions (DRY)

### Nommage

**Classes CSS :**
- Utiliser kebab-case : `.service-card`, `.hero-title`
- Être descriptif : `.btn-primary` plutôt que `.btn1`
- Suivre BEM si pertinent : `.card__title`, `.card--featured`

**IDs :**
- Utiliser camelCase : `#navMenu`, `#contactForm`
- Réserver pour les éléments uniques

**Variables JavaScript :**
- camelCase : `const scrollPosition`, `let isMenuOpen`
- Constantes en UPPER_CASE : `const MAX_ITEMS = 10`

**Fonctions :**
- Verbes d'action : `handleClick()`, `fetchData()`, `updateUI()`
- Descriptives : `calculateTotalPrice()` plutôt que `calc()`

## 📁 Structure du projet

```
kev-studio-main/
├── .github/              # Templates GitHub
│   └── ISSUE_TEMPLATE/
├── .vscode/              # Configuration VS Code
├── assets/               # Médias (à créer)
│   ├── images/
│   ├── videos/
│   └── icons/
├── index.html            # Page principale
├── styles.css            # Styles
├── script.js             # JavaScript
├── favicon.svg           # Favicon
├── manifest.json         # PWA manifest
├── robots.txt            # SEO
├── sitemap.xml           # SEO
├── netlify.toml          # Config Netlify
├── package.json          # Config projet
├── .gitignore            # Fichiers ignorés
├── .editorconfig         # Config éditeur
├── README.md             # Documentation principale
├── QUICKSTART.md         # Guide rapide
├── CUSTOMIZATION.md      # Guide personnalisation
├── CONTRIBUTING.md       # Ce fichier
├── CHANGELOG.md          # Historique des versions
├── SECURITY.md           # Politique de sécurité
└── LICENSE               # Licence
```

## 🧪 Tests

### Tests manuels à effectuer

1. **Navigation**
   - [ ] Menu desktop fonctionne
   - [ ] Menu mobile s'ouvre/ferme
   - [ ] Liens de navigation scrollent correctement
   - [ ] Logo ramène en haut

2. **Responsive**
   - [ ] Mobile (< 576px)
   - [ ] Tablette (576px - 968px)
   - [ ] Desktop (> 968px)
   - [ ] Orientation portrait et paysage

3. **Interactions**
   - [ ] Boutons hover fonctionnent
   - [ ] Animations au scroll se déclenchent
   - [ ] Filtres portfolio fonctionnent
   - [ ] Modal vidéo s'ouvre/ferme
   - [ ] Formulaire se soumet

4. **Performance**
   - [ ] Pas de lag au scroll
   - [ ] Animations fluides
   - [ ] Images chargent rapidement
   - [ ] Pas d'erreurs console

5. **Navigateurs**
   - [ ] Chrome/Edge
   - [ ] Firefox
   - [ ] Safari
   - [ ] Mobile Safari
   - [ ] Chrome Android

## 📝 Documentation

Si vos changements nécessitent une mise à jour de la documentation :

- Mettre à jour le README.md
- Ajouter des commentaires dans le code
- Mettre à jour CUSTOMIZATION.md si pertinent
- Ajouter une entrée dans CHANGELOG.md

## 🎨 Design

Si vous proposez des changements visuels :

- Respecter la palette de couleurs existante
- Maintenir la cohérence visuelle
- Tester sur différentes tailles d'écran
- Fournir des captures d'écran avant/après
- S'assurer que le contraste est suffisant (accessibilité)

## ♿ Accessibilité

Tous les changements doivent respecter l'accessibilité :

- Utiliser les balises sémantiques HTML
- Ajouter des attributs ARIA si nécessaire
- Assurer la navigation au clavier
- Maintenir un contraste suffisant
- Tester avec un lecteur d'écran si possible

## 🏆 Reconnaissance

Les contributeurs seront mentionnés dans :
- Le README.md
- Les release notes
- Le site web (si contribution majeure)

## 📞 Questions ?

- Ouvrir une issue pour les questions générales
- Contacter : contact@kevstudio.fr
- Rejoindre les discussions GitHub

## 📜 Licence

En contribuant, vous acceptez que vos contributions soient sous la même licence que le projet.

---

**Merci de contribuer à Kev Studio ! 🎬✨**
