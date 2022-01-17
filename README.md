# cors-proxy
Simple yet powerful HTTPS reverse-proxy to enable CORS.

## Docker setup
### Image creation
```bash
docker build --tag cors-proxy .
```

### Container creation
```bash
docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=http://localhost:63342 cors-proxy
```
