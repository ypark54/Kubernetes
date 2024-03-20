# Basic configuration
ARG imageName=nvidia/cudagl
ARG imageTag=11.4.2-base
FROM ${imageName}:${imageTag}


ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt upgrade -y 


# Install dependancies
RUN apt install -y \
# CarMaker dependancies for GPU Sensor Capabilities
    libusb-1.0-0 \
    tzdata \
    xvfb \
    libglu1-mesa \
    libxrandr-dev \
    libxft2 \
    libxss1 \
# Matlab and Simulink dependancies
    libpango-1.0-0 \
    libpangoft2-1.0-0 \
    libpangocairo-1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxdamage1 \
    libasound2 \
    libgdk-pixbuf2.0-0 \
    libxinerama1 \
    libxcursor1 \
# Utils
    nfs-common \
    iproute2
RUN rm -rf /var/lib/apt/lists/*


# CarMaker configuration
ARG CM_LICENSE="server 192.168.0.102"
ARG TZ=Europe/Berlin
RUN mkdir -p /opt/ipg/etc && \
    mkdir -p /opt/ipg/carmaker && \
    mkdir -p /usr/local/MATLAB && \
    echo ${CM_LICENSE} >> /opt/ipg/etc/Licenses && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

COPY linux-cm-12 linux-cm-12

CMD ["/bin/sleep", "infinity"]
