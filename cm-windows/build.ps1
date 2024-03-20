&"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchWindowsEngine
docker build -f Dockerfile -t dind-cm:12.0.2 .
docker run -it --rm -v //./pipe/docker_engine://./pipe/docker_engine dind-cm:12.0.2
&"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchLinuxEngine