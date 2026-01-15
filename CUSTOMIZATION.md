# 🎨 Guide de Personnalisation - Kev Studio

Ce guide vous aide à personnaliser entièrement le site selon vos besoins.

## 🎨 Personnalisation du Design

### Palette de couleurs

Toutes les couleurs sont définies dans `styles.css` (lignes 20-30) :

```css
:root {
    /* Couleurs principales */
    --color-bg: #0a0a0a;              /* Fond principal */
    --color-bg-light: #1a1a1a;        /* Fond secondaire */
    --color-bg-card: #141414;         /* Fond des cartes */
    
    /* Textes */
    --color-text: #ffffff;            /* Texte principal */
    --color-text-secondary: #a0a0a0;  /* Texte secondaire */
    --color-text-muted: #666666;      /* Texte atténué */
    
    /* Accent et gradients */
    --color-accent: #6366f1;          /* Couleur d'accent (boutons, liens) */
    --color-accent-hover: #4f46e5;    /* Hover de l'accent */
    --color-gradient-1: #6366f1;      /* Gradient 1 (bleu) */
    --color-gradient-2: #8b5cf6;      /* Gradient 2 (violet) */
    --color-gradient-3: #ec4899;      /* Gradient 3 (rose) */
}
```

#### Exemples de palettes alternatives

**Palette Cyan/Teal :**
```css
--color-accent: #06b6d4;
--color-gradient-1: #06b6d4;
--color-gradient-2: #14b8a6;
--color-gradient-3: #10b981;
```

**Palette Orange/Rouge :**
```css
--color-accent: #f97316;
--color-gradient-1: #f97316;
--color-gradient-2: #ef4444;
--color-gradient-3: #ec4899;
```

**Palette Verte :**
```css
--color-accent: #10b981;
--color-gradient-1: #10b981;
--color-gradient-2: #14b8a6;
--color-gradient-3: #06b6d4;
```

### Typographie

#### Changer les polices

1. Choisir des polices sur [Google Fonts](https://fonts.google.com)
2. Dans `index.html`, remplacer (ligne ~20) :
```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice:wght@400;700&display=swap" rel="stylesheet">
```

3. Dans `styles.css`, modifier :
```css
--font-primary: 'VotrePolice', sans-serif;
--font-display: 'VotrePoliceDisplay', var(--font-primary);
```

#### Ajuster les tailles

Dans `styles.css`, chercher les `font-size` et modifier selon vos besoins :
```css
.hero-title {
    font-size: clamp(3rem, 8vw, 7rem);  /* Min, Préféré, Max */
}
```

### Espacements

Modifier les espacements globaux dans `styles.css` :
```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 6rem;
    --spacing-2xl: 8rem;
}
```

### Bordures et coins arrondis

```css
:root {
    --border-radius-sm: 0.5rem;   /* Petits éléments */
    --border-radius-md: 1rem;     /* Moyen */
    --border-radius-lg: 1.5rem;   /* Grand */
    --border-radius-xl: 2rem;     /* Très grand */
}
```

## 📝 Personnalisation du Contenu

### Hero Section

**Modifier le titre principal :**
```html
<h1 class="hero-title">
    <span class="title-line">Votre première ligne</span>
    <span class="title-line">Votre deuxième ligne</span>
</h1>
```

**Modifier le sous-titre :**
```html
<p class="hero-subtitle">
    Votre sous-titre ici<br>
    Deuxième ligne optionnelle
</p>
```

**Changer les boutons CTA :**
```html
<div class="hero-cta">
    <a href="#portfolio" class="btn btn-primary">
        <span>Texte du bouton</span>
    </a>
    <a href="#contact" class="btn btn-secondary">
        <span>Autre bouton</span>
    </a>
</div>
```

### Section À propos

**Modifier les statistiques :**
```html
<div class="stat-item">
    <span class="stat-number">10+</span>
    <span class="stat-label">Votre métrique</span>
</div>
```

**Ajouter/retirer des statistiques :**
Copier-coller le bloc `stat-item` ci-dessus.

### Services

**Ajouter un nouveau service :**
```html
<div class="service-card">
    <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <!-- Votre icône SVG ici -->
        </svg>
    </div>
    <h3 class="service-title">Titre du service</h3>
    <p class="service-description">
        Description de votre service
    </p>
    <div class="service-tags">
        <span>Tag 1</span>
        <span>Tag 2</span>
    </div>
</div>
```

**Trouver des icônes SVG :**
- [Heroicons](https://heroicons.com)
- [Feather Icons](https://feathericons.com)
- [Lucide](https://lucide.dev)

### Portfolio

**Ajouter un projet :**
```html
<div class="portfolio-item" data-category="montage motion">
    <div class="portfolio-thumbnail">
        <div class="thumbnail-overlay">
            <button class="play-btn" data-video="projet-id">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            </button>
        </div>
        <!-- Option 1 : Placeholder -->
        <div class="thumbnail-placeholder">
            <span>Nom du projet</span>
        </div>
        <!-- Option 2 : Image réelle -->
        <!-- <img src="assets/images/projet-thumbnail.jpg" alt="Projet"> -->
    </div>
    <div class="portfolio-info">
        <h3 class="portfolio-title">Titre du projet</h3>
        <p class="portfolio-category">Catégorie • Sous-catégorie</p>
    </div>
</div>
```

**Catégories disponibles :**
- `montage`
- `motion`
- `branding`
- `social`
- Ou créer les vôtres (penser à ajouter le filtre correspondant)

**Ajouter un filtre :**
```html
<button class="filter-btn" data-filter="nouvelle-categorie">
    Nouvelle Catégorie
</button>
```

### Méthode de travail

**Modifier une étape :**
```html
<div class="method-step">
    <div class="step-number">
        <span>01</span>
    </div>
    <div class="step-content">
        <h3 class="step-title">Titre de l'étape</h3>
        <p class="step-description">
            Description de l'étape
        </p>
        <ul class="step-list">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
        </ul>
    </div>
    <div class="step-visual">
        <div class="visual-icon">
            <!-- Icône SVG -->
        </div>
    </div>
</div>
```

**Modifier les valeurs :**
```html
<div class="value-item">
    <div class="value-icon">🎨</div>
    <h4>Titre de la valeur</h4>
    <p>Description courte</p>
</div>
```

### Contact

**Modifier les informations :**
```html
<div class="detail-item">
    <div class="detail-icon">
        <!-- Icône SVG -->
    </div>
    <div class="detail-text">
        <span class="detail-label">Label</span>
        <span class="detail-value">Valeur</span>
    </div>
</div>
```

**Ajouter un réseau social :**
```html
<a href="https://votre-lien" class="social-link" aria-label="Nom du réseau">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <!-- Icône du réseau social -->
    </svg>
</a>
```

## 🎬 Ajout de Médias

### Images

**Format recommandé :**
- Format : JPG (photos), PNG (logos/transparence), WebP (optimal)
- Taille : Max 1920px de largeur
- Poids : < 500KB par image
- Compression : [TinyPNG](https://tinypng.com)

**Structure des dossiers :**
```
assets/
├── images/
│   ├── hero-bg.jpg
│   ├── about-photo.jpg
│   └── portfolio/
│       ├── projet-1.jpg
│       ├── projet-2.jpg
│       └── ...
├── videos/
│   ├── hero-bg.mp4
│   └── portfolio/
│       ├── projet-1.mp4
│       └── ...
└── icons/
    ├── icon-192x192.png
    └── ...
```

### Vidéos

**Vidéo de fond Hero :**
```html
<div class="hero-background">
    <video autoplay muted loop playsinline class="hero-video">
        <source src="assets/videos/hero-bg.mp4" type="video/mp4">
    </video>
    <div class="gradient-overlay"></div>
</div>
```

Ajouter dans `styles.css` :
```css
.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

**Vidéos de portfolio :**

Modifier `script.js` pour charger les vraies vidéos :
```javascript
playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = button.getAttribute('data-video');
        
        // Créer l'élément vidéo
        const videoHTML = `
            <video controls autoplay class="portfolio-video">
                <source src="assets/videos/portfolio/${videoId}.mp4" type="video/mp4">
                Votre navigateur ne supporte pas la vidéo.
            </video>
        `;
        
        // Remplacer le placeholder
        document.querySelector('.modal-video').innerHTML = videoHTML;
        
        videoModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});
```

## ⚙️ Fonctionnalités Avancées

### Désactiver le curseur personnalisé

Dans `script.js`, commenter ou supprimer la section "CURSOR EFFECT" (lignes ~200-280).

### Modifier les animations

**Vitesse des animations :**
```css
:root {
    --transition-fast: 0.2s ease;   /* Rapide */
    --transition-base: 0.3s ease;   /* Normal */
    --transition-slow: 0.5s ease;   /* Lent */
}
```

**Désactiver certaines animations :**
```css
/* Désactiver l'animation des formes du hero */
.bg-shape {
    animation: none;
}

/* Désactiver le fade-in au scroll */
.fade-in {
    opacity: 1 !important;
    transform: none !important;
}
```

### Changer le comportement du scroll

**Scroll plus rapide/lent :**
```css
html {
    scroll-behavior: smooth;
    /* ou */
    scroll-behavior: auto;  /* Pas d'animation */
}
```

### Mode clair (Light mode)

Ajouter dans `styles.css` :
```css
@media (prefers-color-scheme: light) {
    :root {
        --color-bg: #ffffff;
        --color-bg-light: #f5f5f5;
        --color-bg-card: #fafafa;
        --color-text: #0a0a0a;
        --color-text-secondary: #666666;
        --color-text-muted: #999999;
    }
}
```

## 🌐 Multilingue

Pour ajouter une version anglaise :

1. Dupliquer `index.html` en `index-en.html`
2. Traduire tout le contenu
3. Ajouter un sélecteur de langue dans la navbar :

```html
<div class="language-switcher">
    <a href="index.html">FR</a>
    <a href="index-en.html">EN</a>
</div>
```

## 📱 Responsive

### Breakpoints

Les breakpoints sont définis dans les media queries :
```css
/* Mobile */
@media (max-width: 576px) { }

/* Tablette */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 968px) { }
```

### Tester le responsive

- Chrome DevTools (F12 → Toggle device toolbar)
- Firefox Responsive Design Mode (Ctrl+Shift+M)
- Tester sur de vrais appareils

## 🔧 Optimisations

### Performances

**Minifier les fichiers :**
- CSS : [CSS Minifier](https://cssminifier.com)
- JS : [JavaScript Minifier](https://javascript-minifier.com)
- HTML : [HTML Minifier](https://www.willpeavy.com/tools/minifier/)

**Optimiser les images :**
- [TinyPNG](https://tinypng.com) - Compression PNG/JPG
- [Squoosh](https://squoosh.app) - Conversion WebP
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimisation SVG

### SEO

**Modifier les meta tags :**
```html
<meta name="description" content="Votre description">
<meta name="keywords" content="mot-clé1, mot-clé2">
<meta property="og:title" content="Votre titre">
<meta property="og:description" content="Votre description">
<meta property="og:image" content="https://votre-site.com/og-image.jpg">
```

**Ajouter des données structurées :**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kev Studio",
  "url": "https://www.kevstudio.fr",
  "logo": "https://www.kevstudio.fr/logo.png",
  "description": "Agence audiovisuelle spécialisée en montage vidéo et motion design"
}
</script>
```

## 💡 Conseils

1. **Testez toujours** après chaque modification
2. **Sauvegardez** régulièrement (Git recommandé)
3. **Validez** votre HTML/CSS : [W3C Validator](https://validator.w3.org)
4. **Optimisez** les images avant de les uploader
5. **Testez** sur plusieurs navigateurs et appareils

---

**Besoin d'aide ? Consultez le [README.md](README.md) ou [QUICKSTART.md](QUICKSTART.md)**
