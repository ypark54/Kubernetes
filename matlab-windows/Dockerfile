FROM docker:26.0.0-rc2-windowsservercore-1809

COPY ./R2022b_Update_8_Windows.iso ./Matlab_Installation.iso
COPY ./7z2401-x64.msi ./7z2401-x64.msi
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'Continue'; $verbosePreference='Continue';"]
RUN Start-Process msiexec -Wait -ArgumentList '/i C:\7z2401-x64.msi /qn'
RUN Start-Process 'C:\Program Files\7-Zip\7z.exe' -Wait -ArgumentList 'x Matlab_Installation.iso -oMatlab_Installation -y'
COPY ./installer_input.txt C:/Matlab_Installation/installer_input.txt
RUN Start-Process 'C:\Matlab_Installation\setup.exe' -Wait -ArgumentList '-inputFile C:\Matlab_Installation\installer_input.txt'; rm -R 'C:\Matlab_Installation'; rm 'C:\Matlab_Installation.iso'

COPY ./Dockerfile-dind ./Dockerfile
COPY ./install.ps1 ./install.ps1

CMD ["powershell", "./install.ps1"]
