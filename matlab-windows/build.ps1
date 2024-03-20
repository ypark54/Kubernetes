&"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchWindowsEngine
docker build -f Dockerfile -t dind-matlab:R2022b .

# TODO: Need to run the following commands concurrently, and at the right time. 
# Docker Engine need to be switched to Linux before the build process inside the container begins.
# Currently they are run manually.
docker run -it --rm -v //./pipe/docker_engine://./pipe/docker_engine dind-matlab:R2022b
&"C:\Program Files\Docker\Docker\DockerCli.exe" -SwitchLinuxEngine