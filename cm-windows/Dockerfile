FROM docker:26.0.0-rc2-windowsservercore-1809

COPY ./CD-CarMakerOffice-win-12.0.2.zip ./CD-CarMakerOffice-win-12.0.2.zip
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'Continue'; $verbosePreference='Continue';"]
RUN Expand-Archive -Path C:\CD-CarMakerOffice-win-12.0.2.zip -DestinationPath C:\;
WORKDIR C:/CD-CarMakerOffice-win-12.0.2
RUN ./ipg-install.exe -batch CarMaker-win64-12.0.2_mcycle.txz CarMaker-win64-12.0.2_truck.txz CarMaker-win64-12.0.2.txz
WORKDIR C:/

COPY ./Dockerfile-dind ./Dockerfile
COPY ./install.ps1 ./install.ps1

CMD ["powershell", "./install.ps1"]
