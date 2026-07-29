---
title: TrafficLab 3D - Digital Twin Traffic Visualization
kind: paste
captured_at: 2026-07-25 22:03
tags: []
source_url: 
status: inbox
---

# TrafficLab 3D - Digital Twin Traffic Visualization

https://github.com/duy-phamduc68/TrafficLab-3D — TrafficLab 3D by Yuk (duy-phamduc68). MIT license. 323 stars, 41 forks, 15 commits. Proof of Concept v1.1.

End-to-end traffic analysis suite that creates digital-twin 3D visualizations from mp4 CCTV footage + Google Maps location. No camera calibration or synchronized satellite imagery required.

Three main modules/tabs:
1. Calibration: Establishes projection between CCTV and satellite map. 3 phases — Undistort (intrinsics + Brown-Conrady distortion), Homography (RANSAC pair-point + FOV overlay), Parallax (head/ground contact points, distance reference). Optional SVG affine and ROI stages.
2. Inference: YOLO object detection + tracking with configurable kinematics (speed/orientation smoothing). Config via inference_config.yaml and prior_dimensions.json. Outputs compressed .json.gz.
3. Visualization: Side-by-side synchronized CCTV + satellite view with 3D bounding boxes, floor boxes, speed, orientation. PyQt5 GUI.

Tech: YOLOv8/v11, object tracking, PyQt5, Brown-Conrady distortion model, homography (RANSAC), geospatial projection mapping.

Inspired by Rezaei et al. 2023. Long-term vision: city-wide scale with automatic calibration.

Blog: https://yuk068.github.io/2026/02/20/traffilclab-3d-overview
Demo: https://www.youtube.com/watch?v=AYUXXnzenvk

Topics: computer-vision, digital-twin, traffic-analysis, object-detection, object-tracking, camera-calibration, homography, yolo, satellite-imagery, smart-city, pyqt5-gui.
