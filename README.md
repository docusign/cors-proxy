# cors-proxy
Simple yet powerful HTTPS reverse-proxy to enable CORS.

## Usage
Once the project or Docker image is deployed to an host, you can perform any HTTP call. For instance if the host IP address is 123.456.789.012 and the port being used is 7979 (default) then a basic GET call would be like: 
```bash
curl http://123.456.789.012:7979/https://demo.docusign.net/restapi
```


## Deploy to AWS EC2
```bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo yum install docker
sudo service docker start
sudo systemctl enable docker
sudo docker pull dsdevcenter/cors-proxy
sudo docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=https://example.com dsdevcenter/cors-proxy
```

## Deploy to Azure
```bash
docker login azure
docker context create aci corsproxycontext
docker context use corsproxycontext
docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=https://example.com dsdevcenter/cors-proxy
```

The last command might take a while. Once it's done list Docker containers under `corsproxycontext` ACI context in order to view the host name and port:
```bash
docker ps
# CONTAINER ID           IMAGE                    COMMAND             STATUS              PORTS
# cors-proxy-container   dsdevcenter/cors-proxy                       Running             123.456.789.012:7979->7979/tcp
```

## Deploy to any Linux-like environment
```bash
docker pull dsdevcenter/cors-proxy
docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=https://example.com dsdevcenter/cors-proxy
```

## Docker setup
### Image creation
```bash
docker build --tag cors-proxy .
```

### Container creation
```bash
docker run -d --name cors-proxy-container -p 7979:7979 -e ORIGIN_ALLOW_LIST=https://example.com dsdevcenter/cors-proxy
```
