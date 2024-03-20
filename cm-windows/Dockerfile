## Installation of CarMaker on Docker in Docker Windows container
FROM docker:26.0.0-rc2-windowsservercore-1809

# TODO: Need to adapt the dockerfile for multiple Matlab versions
COPY ./CD-CarMakerOffice-win-12.0.2.zip ./CD-CarMakerOffice-win-12.0.2.zip
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'Continue'; $verbosePreference='Continue';"]
RUN Expand-Archive -Path C:\CD-CarMakerOffice-win-12.0.2.zip -DestinationPath C:\;
WORKDIR C:/CD-CarMakerOffice-win-12.0.2
# Install with CarMaker / MotorCycleMaker / TruckMaker
RUN ./ipg-install.exe -batch CarMaker-win64-12.0.2_mcycle.txz CarMaker-win64-12.0.2_truck.txz CarMaker-win64-12.0.2.txz
WORKDIR C:/


# Powershell script contains additional commands to build a minimal image with a copy of the CarMaker installation
COPY ./Dockerfile-dind ./Dockerfile
COPY ./install.ps1 ./install.ps1
CMD ["powershell", "./install.ps1"]
