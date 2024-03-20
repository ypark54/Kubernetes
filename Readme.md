# Kubernetes for CM4SL on Windows #

- This repository contains Dockerfiles to build necessary images, and YAML files to set up Kubernetes clusters to run Carmaker for Simulink on a Windows node

## Versions ##
- Docker v4.28.0
- Kubernetes v1.29.2
- Flannel v0.24.3
- Helm v3.14.2
- csi-driver-smb v1.14.0

## Overview ##
### Cluster Setup ###
- HA Proxy Frontend for multiple control planes (Ubuntu 22.04)
- Control planes
  - OS: Ubuntu 22.04
  - Container Runtime: crio-dockerd
- Linux worker nodes
  - OS: Ubuntu 22.04
  - Container Runtime: crio-dockerd
- Windows worker nodes
  - OS: Windows Server 2019
  - Container Runtime: cri
- Flannel as CNI
### Deployment Setup ###
- CarMaker SMB server
- Matlab SMB server
- Windows container running on Windows node mount into the SMB server deployments to access the installation



## Docker Image Repository ##
- https://hub.docker.com/r/yeonsoopark/cm-windows-smb
  - Linux SMB server image containing Windows installation of CarMaker
- https://hub.docker.com/r/yeonsoopark/matlab-windows-smb
  - Linux SMB server image containing Windows installation of Matlab and Simulink
- https://hub.docker.com/r/yeonsoopark/cm-windows
  - Windows image containing basic project folder for CarMaker
- https://hub.docker.com/r/yeonsoopark/cm-linux
  - Linux image containing basic project folder for CarMaker
- https://hub.docker.com/r/yeonsoopark/flannel
  - Flannel overlay to enable Windows nodes to join k8s cluster

## Useful Links ##
- https://github.com/ypark54/Ansible
- https://medium.com/@murat.bilal/setting-up-kubernetes-cluster-with-multiple-control-plane-nodes-behind-haproxy-9384c6c040d8
- https://github.com/kubernetes-sigs/sig-windows-tools/blob/master/guides/guide-for-adding-windows-node.md
- https://github.com/kubernetes-csi/csi-driver-smb/tree/master/charts
- https://www.phillipsj.net/posts/how-to-use-the-windows-csi-proxy-and-csi-smb-driver-for-kubernetes/

### Contacts ###
- Yeonsoo Park(yeonsoo.park@ipg-automotive.com)