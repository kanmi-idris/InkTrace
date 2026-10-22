# Davyd NRB’s React Native direct-imports announcement on X

Captured: 2026-10-20
Source URL: https://x.com/tell_me_mur/status/2112543608025080240
Author: Davyd NRB (@tell_me_mur)

## Thread capture

The opening post says that `import { View } from 'react-native'` can pull in all of React Native. It announces `babel-plugin-react-native-direct-imports` and reports a bundle change from 711 KB to 10.6 KB for an app importing one API.

A reply shows the intended rewrite:

```js
import { View } from 'react-native'
// becomes
const View = require('…/View/View').default
```

The author says it uses plain `require()` instead of `import` so Babel does not add interop helpers.

A further reply reports a best-case bundle comparison of 505 to 9 modules and 448 to 1 React Native file. The author says savings depend on how much React Native the app uses, and recommends measuring with `react-native-bundle-discovery`.

The thread says the plugin has path maps for stable React Native releases from 0.70, supports `Platform.OS` / `Platform.select` inlining, handles re-exports and compiled CommonJS in `node_modules`, and works with Metro and Expo. The author calls the project early and asks users to file issues.

The thread links to https://github.com/retyui/babel-plugin-react-native-direct-imports.

## Evidence limits

The bundle-size figures are the author's claims. I did not reproduce them. The repository and npm listing are captured separately as [src-2026-10-20-018] and [src-2026-10-20-019].
