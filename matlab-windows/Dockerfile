####################################
##
## Install Matlab on Linux with Wine
##
####################################
FROM ubuntu:22.04 as matlab-installer

# Can be downloaded from https://www.mathworks.com/downloads/
# Set to 'I want to <Get ISOs and DMGS>' on the dropdown menu to download full ISOs
# For this Dockerfile, a predownloaded iso is copied
COPY ./R2022b_Update_8_Windows.iso ./R2022b_Update_8_Windows.iso

ENV DEBIAN_FRONTEND="noninteractive"
RUN apt update && apt install -y --install-recommends \
	apt-transport-https \
	ca-certificates \
	gnupg \
	p7zip-full \
	wget \
	xvfb
	
ARG WINE_BRANCH="stable"
RUN wget -nv -O- https://dl.winehq.org/wine-builds/winehq.key | APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=1 apt-key add - \
    && echo "deb https://dl.winehq.org/wine-builds/ubuntu/ $(grep VERSION_CODENAME= /etc/os-release | cut -d= -f2) main" >> /etc/apt/sources.list \
    && dpkg --add-architecture i386 \
    && apt update \
    && apt install -y --install-recommends winehq-${WINE_BRANCH} \
    && rm -rf /var/lib/apt/lists/*

RUN 7z x ./R2022b_Update_8_Windows.iso -o./Matlab_Installation
WORKDIR ./Matlab_Installation
COPY ./installer_input.txt ./installer_input.txt
COPY ./install.sh ./install.sh
RUN chmod +x ./install.sh
RUN ./install.sh

#############################################################
##
## Copy the Matlab installation to a minimal SMB server image
##
#############################################################
FROM andyzhangx/samba:win-fix

ARG src="/home/user/MATLAB/"
ARG trg="/smbshare/MATLAB/"
COPY --from=matlab-installer ${src} ${trg}


# TODO: Follow up with SMB configuration fixes to provide full 




