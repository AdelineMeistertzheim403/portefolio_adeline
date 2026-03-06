# Portfolio Adeline

Ce depot contient un portfolio statique en HTML, CSS et JavaScript, servi par `nginx` dans un conteneur Docker.

## Nettoyage effectue

Les anciens fichiers PHP de connexion, base de donnees et formulaire serveur ont ete retires de l'architecture de deploiement. Le site public fonctionne maintenant sans PHP.

## Deploiement avec Traefik

Prerequis :

- Docker et Docker Compose installes sur le VPS
- Un reseau Docker externe `traefik`
- Une instance Traefik deja configuree avec l'entrypoint `websecure`
- Un resolver LetsEncrypt nomme `letsencrypt`
- Les DNS `adelinemeistertzheim.fr` et `www.adelinemeistertzheim.fr` pointent vers le VPS

Commandes :

```bash
docker network create traefik
docker compose build
docker compose up -d
```

## Mise a jour

```bash
docker compose build
docker compose up -d
```
