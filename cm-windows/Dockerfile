FROM ubuntu:22.04 as cm-installer

COPY ./CD-CarMakerOffice-win-12.0.2.zip ./CD-CarMakerOffice-win-12.0.2.zip

ENV DEBIAN_FRONTEND="noninteractive"
RUN apt update && apt install -y --no-install-recommends \
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
    
RUN 7z x ./CD-CarMakerOffice-win-12.0.2.zip -o./
