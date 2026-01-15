# 🚀 Guide de Déploiement

Ce guide vous aide à mettre votre site Kev Studio en ligne rapidement et facilement.

## 📋 Avant de déployer

### Checklist pré-déploiement

- [ ] Toutes les images sont optimisées
- [ ] Les informations de contact sont à jour
- [ ] Le formulaire de contact est configuré
- [ ] Les vidéos sont ajoutées (ou placeholders remplacés)
- [ ] Testé sur plusieurs navigateurs
- [ ] Testé sur mobile et desktop
- [ ] Pas d'erreurs dans la console
- [ ] Les meta tags sont personnalisés
- [ ] Le sitemap.xml est à jour
- [ ] Le favicon est en place

## 🌐 Options de déploiement

### Option 1 : Netlify (Recommandé) ⭐

**Avantages :**
- ✅ Gratuit
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Déploiement continu
- ✅ Très simple

#### Méthode A : Glisser-déposer (Plus simple)

1. **Créer un compte**
   - Aller sur [netlify.com](https://www.netlify.com)
   - S'inscrire (gratuit)

2. **Déployer**
   - Cliquer sur "Add new site" → "Deploy manually"
   - Glisser-déposer le dossier du projet
   - Attendre quelques secondes
   - Votre site est en ligne ! 🎉

3. **Configuration**
   - Cliquer sur "Domain settings"
   - Personnaliser le nom : `kev-studio.netlify.app`
   - Ou ajouter un domaine personnalisé

#### Méthode B : Via Git (Recommandé pour mises à jour)

1. **Pousser sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_USERNAME/kev-studio.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Sur Netlify : "Add new site" → "Import from Git"
   - Sélectionner GitHub
   - Choisir votre repository
   - Laisser les paramètres par défaut
   - Cliquer sur "Deploy site"

3. **Déploiement automatique**
   - Chaque push sur `main` déploie automatiquement
   - Prévisualisation des PRs automatique

#### Configuration du domaine personnalisé

1. **Acheter un domaine**
   - Chez Netlify, OVH, Gandi, etc.

2. **Configurer les DNS**
   - Dans Netlify : "Domain settings" → "Add custom domain"
   - Suivre les instructions pour configurer les DNS

3. **HTTPS**
   - Activé automatiquement par Netlify
   - Certificat Let's Encrypt gratuit

### Option 2 : Vercel

**Avantages :**
- ✅ Gratuit
- ✅ Très rapide
- ✅ Interface moderne

#### Déploiement

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Déployer**
   ```bash
   vercel
   ```

3. **Suivre les instructions**
   - Connecter votre compte
   - Confirmer les paramètres
   - Le site est déployé !

### Option 3 : GitHub Pages

**Avantages :**
- ✅ Gratuit
- ✅ Intégré à GitHub

**Limitations :**
- ⚠️ Pas de redirections serveur
- ⚠️ Moins de fonctionnalités

#### Déploiement

1. **Pousser sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_USERNAME/kev-studio.git
   git push -u origin main
   ```

2. **Activer GitHub Pages**
   - Aller dans Settings → Pages
   - Source : "Deploy from a branch"
   - Branch : `main` / `root`
   - Sauvegarder

3. **Accéder au site**
   - URL : `https://VOTRE_USERNAME.github.io/kev-studio/`

### Option 4 : Hébergement traditionnel (FTP)

**Pour :** OVH, O2Switch, Hostinger, etc.

#### Déploiement

1. **Se connecter via FTP**
   - Utiliser FileZilla ou similaire
   - Hôte : fourni par votre hébergeur
   - Identifiants : fournis par votre hébergeur

2. **Uploader les fichiers**
   - Sélectionner tous les fichiers
   - Les glisser dans le dossier `public_html` ou `www`
   - Attendre la fin du transfert

3. **Vérifier**
   - Aller sur votre domaine
   - Le site devrait être en ligne

## 🔧 Configuration post-déploiement

### 1. Configurer le formulaire de contact

#### Option A : Netlify Forms (si hébergé sur Netlify)

Dans `index.html`, ajouter `netlify` à la balise form :
```html
<form class="contact-form" name="contact" method="POST" netlify>
```

#### Option B : Formspree

1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un formulaire
3. Copier l'URL
4. Dans `index.html` :
```html
<form class="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
```

#### Option C : Backend personnalisé

Voir le README.md pour les instructions détaillées.

### 2. Configurer Google Analytics

1. **Créer un compte**
   - Aller sur [analytics.google.com](https://analytics.google.com)
   - Créer une propriété

2. **Ajouter le code**
   Dans `index.html`, avant `</head>` :
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### 3. Configurer Google Search Console

1. **Ajouter votre site**
   - Aller sur [search.google.com/search-console](https://search.google.com/search-console)
   - Ajouter une propriété

2. **Vérifier la propriété**
   - Méthode recommandée : Balise HTML
   - Copier la balise meta
   - L'ajouter dans `<head>` de `index.html`

3. **Soumettre le sitemap**
   - Dans Search Console : "Sitemaps"
   - Ajouter : `https://votre-site.com/sitemap.xml`

### 4. Optimiser les performances

#### Activer la compression

**Netlify :** Automatique

**Autre hébergeur :** Ajouter dans `.htaccess` :
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

#### Activer le cache

**Netlify :** Configuré dans `netlify.toml`

**Autre hébergeur :** Ajouter dans `.htaccess` :
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 5. Configurer les redirections HTTPS

**Netlify :** Automatique

**Autre hébergeur :** Ajouter dans `.htaccess` :
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 📊 Monitoring et maintenance

### Outils recommandés

1. **Google Analytics** - Statistiques de trafic
2. **Google Search Console** - Performance SEO
3. **Uptime Robot** - Monitoring de disponibilité (gratuit)
4. **PageSpeed Insights** - Performance
5. **GTmetrix** - Analyse de performance

### Vérifications régulières

- [ ] Site accessible et rapide
- [ ] Formulaire de contact fonctionne
- [ ] Pas d'erreurs dans la console
- [ ] Certificat SSL valide
- [ ] Sauvegardes à jour
- [ ] Contenu à jour

## 🔄 Mises à jour

### Avec Netlify/Vercel (Git)

```bash
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push

# Le site se met à jour automatiquement !
```

### Avec hébergement FTP

1. Modifier les fichiers localement
2. Se connecter via FTP
3. Uploader les fichiers modifiés
4. Vérifier les changements

## 🆘 Dépannage

### Le site ne s'affiche pas

1. Vérifier que tous les fichiers sont uploadés
2. Vérifier les permissions des fichiers (755 pour dossiers, 644 pour fichiers)
3. Vérifier les erreurs dans la console du navigateur
4. Vider le cache du navigateur

### Le formulaire ne fonctionne pas

1. Vérifier la configuration (Netlify Forms, Formspree, etc.)
2. Vérifier les erreurs dans la console
3. Tester avec un email différent
4. Vérifier les spams

### Les images ne s'affichent pas

1. Vérifier les chemins des images
2. Vérifier que les images sont uploadées
3. Vérifier les permissions
4. Vérifier la console pour les erreurs 404

### Le site est lent

1. Optimiser les images (TinyPNG)
2. Activer la compression
3. Utiliser un CDN (Netlify/Vercel le font automatiquement)
4. Minifier CSS/JS

## 📱 Tester le déploiement

### Checklist post-déploiement

- [ ] Le site s'affiche correctement
- [ ] Toutes les pages/sections sont accessibles
- [ ] Les images s'affichent
- [ ] Les animations fonctionnent
- [ ] Le menu mobile fonctionne
- [ ] Le formulaire fonctionne
- [ ] Les liens sociaux fonctionnent
- [ ] HTTPS est actif (cadenas vert)
- [ ] Le site est rapide (< 3s de chargement)
- [ ] Pas d'erreurs dans la console
- [ ] Testé sur mobile
- [ ] Testé sur plusieurs navigateurs

### Outils de test

- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## 🎉 Félicitations !

Votre site Kev Studio est maintenant en ligne ! 🚀

### Prochaines étapes

1. Partager le lien sur les réseaux sociaux
2. Ajouter le site à votre signature email
3. Mettre à jour vos profils professionnels
4. Soumettre à des annuaires
5. Créer du contenu régulièrement
6. Analyser les statistiques

## 📞 Besoin d'aide ?

- 📖 Consulter le [README.md](README.md)
- 💬 Ouvrir une issue sur GitHub
- 📧 Contact : contact@kevstudio.fr

---

**Bon déploiement ! 🎬✨**
