---
title: OpenFPM 5.2.0 PR - Metal GPU Backend
kind: paste
captured_at: 2026-07-24 08:38
tags: []
source_url: 
status: inbox
---

# OpenFPM 5.2.0 PR - Metal GPU Backend

GitHub PR #18 - mosaic-group/openfpm: OpenFPM 5.2.0 with Metal GPU backends and standalone CMake examples.

OpenFPM is a particle simulation framework. This PR adds transparent Metal GPU support through MoltenVK and SPIR-V, keeping existing .cu files as source of truth.

Key changes:
- Transparent Metal GPU backend via MoltenVK + SPIR-V, CUDA files as source of truth
- Backend-aware installed CMake package supporting CUDA, HIP, Metal, OpenMP, sequential, NONE
- All examples migrated from example.mk/delegated Makefiles to standalone find_package(openfpm) CMake projects
- Optional numerics/PETSc component discovery with diagnostics
- CMake-native MPI launch targets (no openfpm_vars needed)
- Isolated package metadata between backend build trees
- clspv installation support, updated ParMETIS discovery
- Documentation, changelog, version bumped to 5.2.0

Validation: Built OpenFPM Release with Metal backend, built/launched standalone Metal SPH DLB example, verified against CPU. Tested Metal, CUDA-on-CPU, and NONE configs.

Review feedback (incardon): suggest -cl-single-precision-constant in all Metal kernels to remove 64-bit hacks in MoltenVKKernelABI.cpp. Volatile decorator in SPIR-V not respected by MoltenVK causing load/store reordering — should be reported upstream. CMake folder not appropriate location for that tool; should be in src/spirv_molten.

Review feedback (paolomonasterolo): git clones track HEAD but pipeline depends on specific SHAs — clspv revision miscompiles, SPIR-V post-pass works around older SPIRV-Cross behavior. Pin SHAs to avoid upstream breakage. brew install molten-vk version varies between machines — print version at configure time.

Repo: mosaic-group/openfpm, 99 stars, 24 forks. Author: abhinavsns. Open (not yet merged).
