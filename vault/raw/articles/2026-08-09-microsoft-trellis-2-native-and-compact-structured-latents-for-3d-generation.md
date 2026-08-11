---
title: "Microsoft TRELLIS.2: Native and Compact Structured Latents for 3D Generation"
kind: "paste"
captured_at: "2026-08-09 20:29"
tags: ["github", "microsoft", "3d-generation", "image-to-3d", "pbr", "open-source", "mit-license", "computer-vision"]
source_url: "https://github.com/microsoft/TRELLIS.2"
status: "inbox"
---

# Microsoft TRELLIS.2: Native and Compact Structured Latents for 3D Generation

## Repository overview
Microsoft TRELLIS.2 is a 4B-parameter 3D generative model for high-fidelity image-to-3D generation. The repository describes it as open-source and releases the model and code under the MIT License.

## Verified capabilities
- Generates high-resolution fully textured assets.
- Models Base Color, Roughness, Metallic, and Opacity surface attributes.
- Uses O-Voxel, a sparse voxel representation designed for arbitrary topology.
- Handles open surfaces, non-manifold geometry, and internal enclosed structures.
- Supports 512^3, 1024^3, and 1536^3 output resolutions.
- README timing examples on an NVIDIA H100 are approximately 3 seconds, 17 seconds, and 60 seconds for those resolutions.
- Converts textured meshes to O-Voxel in under 10 seconds on a single CPU and converts O-Voxel to textured meshes in under 100 milliseconds on CUDA, according to the README.
- Image-to-3D inference generates a PBR-ready GLB file and a preview video.
- Shape-conditioned PBR texture generation is also provided.
- Full training code and pretrained TRELLIS.2-4B weights are available.

## Output caveat
The generated GLB is exported in opaque mode by default. The alpha channel is preserved in the texture map, but transparency is not active until the alpha channel is manually connected to the material opacity or alpha input in 3D software.

## Requirements
- Linux is the currently tested operating system.
- An NVIDIA GPU with at least 24 GB of memory is required. The README verifies the code on NVIDIA A100 and H100 GPUs.
- CUDA Toolkit is required for some packages. CUDA 12.4 is recommended.
- Python 3.8 or higher and Conda are recommended.
- The setup uses packages including flash-attn, nvdiffrast, nvdiffrec, CuMesh, FlexGEMM, and O-Voxel.

## Repository structure
The repository contains O-Voxel, configuration, data toolkit, TRELLIS.2, assets, training and inference scripts, and texturing applications. The inspected repository is primarily Python with C++ and CUDA components.

## Licensing
The model and code use the MIT License. The README notes that nvdiffrast and nvdiffrec have separate license terms.

## User-supplied summary
Most people think AI-generated 3D assets still mean rough geometry you have to manually texture and clean up before it's usable in an actual game or scene! 

Microsoft's TRELLIS.2 argues otherwise. 

It's a 4B-parameter, open-source, MIT-licensed model that generates fully PBR-textured assets directly from a single image, base colour, roughness, metallic, and opacity included, handling genuinely difficult geometry like non-manifold shapes and open surfaces that older methods couldn't touch. 

The output itself exports straight to .glb, ready for Unity, Unreal, or Blender with no manual PBR pass required.

Repo: https://github.com/microsoft/TRELLIS.2

Follow 
@neil_xbt
 for more!
