---
title: Exercises Dataset — 1,324 Fitness Exercises with GIFs, Images & Bilingual Instructions
kind: paste
captured_at: 2026-06-28 06:37
tags: [fitness, dataset, exercises, open-source, ml, health]
source_url: https://github.com/hasaneyldrm/exercises-dataset
status: inbox
---

# Exercises Dataset — 1,324 Fitness Exercises with GIFs, Images & Bilingual Instructions

Exercises Dataset by hasaneyldrm — a comprehensive fitness exercise dataset with 1,324 exercises, each with animation GIF, thumbnail image, muscle group info, equipment data, and bilingual (English/Turkish) instructions. 383 stars, 64 forks.

Contents:
- data/exercises.json — full dataset (JSON array, 1,324 records)
- images/ — 1,324 thumbnail JPGs
- videos/ — 1,324 animation GIFs
- index.html — client-side exercise browser with search, filter by category/equipment/target
- setup.html — developer setup guide (DB SQL generation, API integration code, LLM prompt for backend generation)

Data schema per exercise: id, name, category (body part), equipment, instructions (en/tr), muscle_group, secondary_muscles, target, image path, gif_url, created_at.

Exercise breakdown by body part: Upper Arms 292, Upper Legs 227, Back 203, Waist 169, Chest 163, Shoulders 143, Lower Legs 59, Lower Arms 37, Cardio 29, Neck 2.

By equipment: Body Weight 325, Dumbbell 294, Cable 157, Barbell 154, Leverage Machine 81, Band 54, Smith Machine 48, Kettlebell 41, Weighted 36, Stability Ball 28, EZ Barbell 23, Other 83. ~25% bodyweight only.

License: Educational and non-commercial purposes only. Commercial use strictly prohibited. Media belongs to respective copyright holders.
