# local-kubernetes (docker-for-mac)

This is an example repository playing around with docker-for-mac. Utilizes Helm, Spinnaker, and an application deployment.

## Setup

```bash
    brew install kubernetes-helm

    helm init

    helm install stable/nginx-ingress --name my-nginx

    helm install --name spinnaker-local stable/spinnaker --timeout 600

    kubctl apply -f .kube/ingress.yml
```

There are a few ways we can add the service:

- Via kubectl
- via Spinnaker

