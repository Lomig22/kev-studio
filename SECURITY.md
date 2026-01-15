# Politique de Sécurité

## Versions Supportées

| Version | Supportée          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Signaler une Vulnérabilité

Si vous découvrez une vulnérabilité de sécurité dans ce projet, merci de nous la signaler de manière responsable.

### Comment signaler

1. **Ne pas** créer d'issue publique sur GitHub
2. Envoyer un email à : contact@kevstudio.fr
3. Inclure dans votre rapport :
   - Description détaillée de la vulnérabilité
   - Étapes pour reproduire le problème
   - Impact potentiel
   - Suggestions de correction (si possible)

### Délai de réponse

- Accusé de réception : 48 heures
- Analyse initiale : 7 jours
- Correction : Selon la gravité (1-30 jours)

### Divulgation

Nous suivons le principe de divulgation responsable :
- Nous corrigerons la vulnérabilité avant toute divulgation publique
- Nous créditerons le découvreur (sauf demande contraire)
- Nous publierons un avis de sécurité après la correction

## Bonnes Pratiques de Sécurité

### Pour les développeurs

1. **Validation des entrées**
   - Toujours valider et assainir les données utilisateur
   - Utiliser des bibliothèques de validation éprouvées

2. **Gestion des secrets**
   - Ne jamais commiter de clés API, mots de passe, ou tokens
   - Utiliser des variables d'environnement
   - Ajouter les fichiers sensibles à `.gitignore`

3. **Dépendances**
   - Maintenir les dépendances à jour
   - Auditer régulièrement avec `npm audit` (si applicable)
   - Utiliser des versions fixes plutôt que `latest`

4. **Headers de sécurité**
   - Les headers de sécurité sont configurés dans `netlify.toml`
   - Vérifier avec [Security Headers](https://securityheaders.com)

### Pour les utilisateurs

1. **Formulaire de contact**
   - Ne jamais partager d'informations sensibles via le formulaire
   - Utiliser un email sécurisé pour les informations confidentielles

2. **Navigation**
   - Vérifier l'URL avant de saisir des informations
   - Utiliser une connexion HTTPS (automatique avec Netlify)

3. **Mises à jour**
   - Garder votre navigateur à jour
   - Activer les mises à jour automatiques si possible

## Configuration de Sécurité

### Headers HTTP

Les headers suivants sont configurés (voir `netlify.toml`) :

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Content Security Policy (CSP)

Pour ajouter une CSP stricte, ajouter dans `netlify.toml` :

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = """
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self';
    """
```

### HTTPS

- Toujours utiliser HTTPS en production
- Netlify fournit HTTPS automatiquement
- Forcer HTTPS dans la configuration Netlify

## Checklist de Sécurité

Avant le déploiement :

- [ ] Pas de secrets dans le code
- [ ] Validation des entrées formulaire
- [ ] Headers de sécurité configurés
- [ ] HTTPS activé
- [ ] Dépendances à jour
- [ ] Tests de sécurité effectués
- [ ] Backup des données configuré
- [ ] Monitoring des erreurs activé

## Ressources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Security Headers](https://securityheaders.com)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## Contact

Pour toute question de sécurité :
📧 contact@kevstudio.fr

---

Dernière mise à jour : 15 janvier 2026
