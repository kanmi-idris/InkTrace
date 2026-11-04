# react-native-tgfx performance documentation snapshot

Captured: 2026-11-04
Publisher: react-native-tgfx maintainers
Source URL: https://tgfx.margelo.com/docs/performance

The maintainers compare react-native-tgfx with react-native-skia 3.8.1 on one Samsung SM-E146B 90 Hz device, using release builds and the mean of two runs. The stated suite uses 20,000 shapes, 3,600 images, a 40-octave shader, an image pattern, 900 paths, and 6,000 texts. The page defines Present FPS as frames that reached the screen.

Reported present-FPS figures are:

| Scene | tgfx | react-native-skia 3.8.1 |
|---|---:|---:|
| Shapes | 60.5 | 25.8 |
| Images | 90.3 | 66.1 |
| Shader | 15.0 | 9.3 |
| Pattern | 90.3 | 84.8 |
| Paths | 90.3 | 17.6 |
| Text | 68.3 | 34.4 |

The page says the comparison used one device model and only two runs. These are project-published measurements, not independent replication or a broad device benchmark. Present-FPS results close to or slightly above the device's listed 90 Hz refresh rate should be interpreted in that measurement context.

The page also reports that optional prewarming reduced the mean first-canvas window from 28.4 ms to 11.9 ms across four cold starts per arm on the same Samsung model.
