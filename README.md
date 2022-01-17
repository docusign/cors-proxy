# cors-proxy
Simple yet powerful HTTPS reverse-proxy to enable CORS.

## Usage
```bash
curl http://localhost:7979/https://demo.docusign.net/restapi
```

## Docker setup
### Image creation
```bash
docker build --tag cors-proxy .
```

### Container creation
```bash
docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=http://localhost:63342 cors-proxy
```
