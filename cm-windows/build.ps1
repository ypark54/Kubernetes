W
C:\Program Files\Docker\Docker\DockerCli.exe -SwitchWindowsEngine
docker build -f Dockerfile -t dind .
docker run -it --rm -v //./pipe/docker_engine://./pipe/docker_engine dind
C:\Program Files\Docker\Docker\DockerCli.exe -SwitchLinuxEngine