# 🚀 Guide de Démarrage Rapide - Kev Studio

## Mise en route en 5 minutes

### 1. Ouvrir le site

Double-cliquez sur `index.html` - C'est tout ! 🎉

### 2. Personnaliser le contenu

#### Modifier les textes
Ouvrir `index.html` et chercher :
- `<h1>` pour le titre principal
- `<p>` pour les paragraphes
- `.section-title` pour les titres de section

#### Changer les couleurs
Ouvrir `styles.css` et modifier (ligne ~20) :
```css
--color-accent: #6366f1;  /* Votre couleur principale */
```

#### Ajouter vos images
1. Créer un dossier `assets/images/`
2. Y placer vos images
3. Dans `index.html`, remplacer :
```html
<div class="image-placeholder">...</div>
```
par :
```html
<img src="assets/images/votre-photo.jpg" alt="Description">
```

### 3. Configurer le formulaire de contact

#### Option simple : Formspree (gratuit)
1. Aller sur [formspree.io](https://formspree.io)
2. Créer un compte gratuit
3. Créer un nouveau formulaire
4. Copier l'URL fournie
5. Dans `index.html`, remplacer :
```html
<form class="contact-form" id="contactForm">
```
par :
```html
<form class="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

### 4. Mettre en ligne

#### Netlify (le plus simple)
1. Aller sur [netlify.com](https://www.netlify.com)
2. Créer un compte (gratuit)
3. Glisser-déposer le dossier du projet
4. Votre site est en ligne ! 🌐

#### Ou via Git
```bash
# Initialiser git
git init
git add .
git commit -m "Initial commit"

# Pousser sur GitHub
git remote add origin https://github.com/VOTRE_USERNAME/kev-studio.git
git push -u origin main

# Connecter à Netlify depuis GitHub
```

### 5. Checklist avant la mise en ligne

- [ ] Remplacer toutes les images placeholder
- [ ] Mettre à jour les informations de contact
- [ ] Configurer le formulaire
- [ ] Ajouter vos vidéos de portfolio
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Tester le formulaire de contact

## 📝 Modifications courantes

### Changer l'email de contact
Chercher dans `index.html` :
```html
<span class="detail-value">contact@kevstudio.fr</span>
```

### Modifier la localisation
Chercher dans `index.html` :
```html
<span class="detail-value">Saint-Ouen, Île-de-France</span>
```

### Ajouter un projet au portfolio
Copier-coller ce bloc dans la section portfolio :
```html
<div class="portfolio-item" data-category="montage">
    <div class="portfolio-thumbnail">
        <div class="thumbnail-overlay">
            <button class="play-btn" data-video="nouveau-projet">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </button>
        </div>
        <div class="thumbnail-placeholder">
            <span>Nouveau Projet</span>
        </div>
    </div>
    <div class="portfolio-info">
        <h3 class="portfolio-title">Titre du projet</h3>
        <p class="portfolio-category">Catégorie</p>
    </div>
</div>
```

### Modifier les statistiques
Chercher dans `index.html` :
```html
<div class="stat-item">
    <span class="stat-number">5+</span>
    <span class="stat-label">Ans d'expérience</span>
</div>
```

## 🆘 Problèmes courants

### Le site ne s'affiche pas correctement
- Vérifier que tous les fichiers sont dans le même dossier
- Ouvrir avec un navigateur moderne (Chrome, Firefox, Safari)
- Vider le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)

### Les animations ne fonctionnent pas
- Vérifier que `script.js` est bien chargé
- Ouvrir la console (F12) pour voir les erreurs
- Désactiver les bloqueurs de publicité

### Le formulaire ne fonctionne pas
- Le formulaire est en mode démo par défaut
- Suivre les instructions ci-dessus pour configurer Formspree
- Ou voir le README.md pour d'autres options

## 📞 Besoin d'aide ?

- 📖 Lire le [README.md](README.md) complet
- 💬 Ouvrir une issue sur GitHub
- 📧 Contact : contact@kevstudio.fr

---

**Bon courage ! 🚀**
