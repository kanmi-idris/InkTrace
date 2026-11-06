# Sand3D library README capture

## Source

- Repository: https://github.com/Sandflow-ai/sand3d
- README observed on 2026-11-05.

## Claims and details in the README

- Sand3D is a Python library for writing 3D objects as programs. The README describes profiles, solids, edits, frames, joints, and assemblies over Blender's `bpy`.
- The README says the same program builds the same mesh, bit for bit. This is a project claim; I did not run the library.
- The library README lists GLB, URDF, USDA, OBJ, and STL export. It says GLB carries mesh/material/joint data, URDF carries links and joints, USDA carries an OpenUSD tree, and OBJ/STL export meshes only.
- The repository declares Apache License 2.0. The README separately says the five Hugging Face dataset cards use CC BY 4.0. See the dataset audit for row-level source-license caveats.
- The README recommends Python 3.13 or 3.11. It says Blender supplies `bpy`, and no `bpy` wheel is available for Python 3.12 or Intel Macs from Blender 5.2 onward.
- The README says the complete API takes about 3,600 tokens in a prompt.

No install, code execution, or runtime test was performed.
