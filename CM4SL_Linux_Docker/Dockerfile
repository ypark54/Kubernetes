FROM ubuntu:20.04

ENV TZ Europe/Berlin

COPY license.lic /.matlab/R2022b_licenses/license.lic
ENV MLM_LICENSE_FILE=/.matlab/R2022b_licenses/license.lic
RUN apt update \
        && DEBIAN_FRONTEND=noninteractive apt install -y \
            libusb-1.0-0 \
            tzdata \
            xvfb \
            libglu1-mesa \
            libxrandr-dev \
            libxft2 \
            libxss1 \
            libpango-1.0-0 \
            libglib2.0-0 \
            libnss3 \
            libatk1.0-0 \
            libatk-bridge2.0-0 \
            libcups2 \
            libxcomposite1 \
            libxdamage1 \
            libasound2 \
            libgbm1 \
            libgdk-pixbuf2.0-0 \
            libxinerama1 \
            libxcursor1 \
            libpangocairo-1.0-0 \
            libpangoft2-1.0-0 \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /opt/ipg/etc \
    && echo "server 192.168.0.102" >> /opt/ipg/etc/Licenses \
    && cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


