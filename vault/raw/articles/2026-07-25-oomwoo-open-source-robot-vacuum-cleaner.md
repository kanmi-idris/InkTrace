---
title: OOMWOO - Open-Source Robot Vacuum Cleaner
kind: paste
captured_at: 2026-07-25 20:00
tags: []
source_url: 
status: inbox
---

# OOMWOO - Open-Source Robot Vacuum Cleaner

https://github.com/makerspet/oomwoo — Open-source robot vacuum you build yourself. Raspberry Pi, ROS2, Nav2, Home Assistant, 2D LiDAR, 3D printed, ESP32, Arduino, STM32. Local-first, no cloud required. Apache 2.0. 6.3k stars, 269 forks, 248 commits. By makerspet.com / remake.ai.

Architecture: 3D-printed chassis, CM4/CM5 + STM32G070 MCU on custom I/O PCB, 2D LiDAR for SLAM, dual-spinning mop, tapered rubber roller brush. ROS2 + Nav2 for autonomous navigation. Gazebo simulation.

Modules (all open for parallel contribution): URDF + Gazebo sim, coverage cleaning + mapping, localization/navigation on known map, dock cycle, recovery behaviors/safety, obstacle avoidance (camera + ToF), floor-surface handling, cleaning modes/zones, control app, compute benchmark (4GB→2GB RAM target), I/O PCB (KiCad, JLCPCB), MCU firmware (STM32G473, FreeRTOS, STM32duino), live robot bringup.

Prior art referenced: Valetudo (cloud-free firmware), Kaia.ai LDS libraries, remakeai vacuum ROS2 bridge, Open Mower, Dennis Giese robotinfo.dev teardowns.

Name OOMWOO is a rotational ambigram (reads same flipped 180°). Kit available at makerspet.com (optional). App store via remake.ai (also optional). Stretch goals: LeRobot integration, OpenClaw.
