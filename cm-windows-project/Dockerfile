ARG golangTag=1.12.6-windowsservercore-1809
# TODO: need a -1903 tag but none published yet
ARG imageName=mcr.microsoft.com/windows
ARG imageTag=ltsc2019
# Other common ones: 1803-amd64, 1903-amd64
# full list: curl -L https://mcr.microsoft.com/v2/windows/nanoserver/tags/list

FROM golang:${golangTag} as builder
ENV pausesrcdir="src\\github.com\\kubernetes-sigs\\windows-testing"
ENV wincatsrcdir="src\\github.com\\kubernetes-sigs\\sig-windows-tools"
RUN mkdir $ENV:pausesrcdir ; cd $ENV:pausesrcdir ; git clone https://github.com/kubernetes-sigs/windows-testing.git .
RUN mkdir $ENV:wincatsrcdir ; cd $ENV:wincatsrcdir ; git clone https://github.com/kubernetes-sigs/sig-windows-tools.git .
RUN cd $ENV:pausesrcdir  ; git fetch --all ; git checkout adelina-t-patch-15 ; git status ; cd images\pause ; go build -o pauseloop.exe .
RUN cd $ENV:wincatsrcdir ; git fetch --all ; git checkout v0.1.6 			 ; git status ; cd cmd\wincat   ; go build -o wincat.exe .


# Basic configuration

FROM ${imageName}:${imageTag}

COPY --from=builder "c:\\gopath\\src\\github.com\\kubernetes-sigs\\sig-windows-tools\\cmd\\wincat\\wincat.exe" "c:\\windows\\system32\\wincat.exe"
COPY --from=builder "c:\\gopath\\src\\github.com\\kubernetes-sigs\\windows-testing\\images\\pause\\pauseloop.exe" "c:\\windows\\system32\\pauseloop.exe"


# CarMaker configuration
ARG CM_LICENSE="server 192.168.0.102"
RUN mkdir "C:/ipg/etc" "C:/ipg/carmaker" "C:/MATLAB" "C:/Users/ContainerAdministrator/AppData/Roaming/MathWorks/MATLAB/R2022b_licenses"
RUN echo %CM_LICENSE% >> C:/ipg/etc/Licenses

COPY windows-cm-12 windows-cm-12
ARG licenseDir="C:/Users/ContainerAdministrator/AppData/Roaming/MathWorks/MATLAB/R2022b_licenses"
COPY license.lic ${licenseDir}

CMD pauseloop.exe
