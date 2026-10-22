# babel-plugin-react-native-direct-imports GitHub repository snapshot

Captured: 2026-10-20
Source URL: https://github.com/retyui/babel-plugin-react-native-direct-imports
Owner: retyui (Davyd NRB)
Repository visibility: Public
Branch shown: `main`

## README summary

The README describes a Babel plugin that replaces `react-native` barrel imports with direct `require()` calls to underlying modules. It says this lets the bundle include only the React Native APIs used.

The README explains that `react-native/index.js` is a CommonJS barrel with lazy `require()` getters. It says bundlers cannot tree-shake this structure, so importing one API can pull in unrelated React Native modules.

The README example rewrites imports such as `View`, `AppRegistry`, and `Systrace` to direct paths under `react-native/Libraries/...`. It explains that plain `require()` avoids Babel interop helper code that could be added for `import` statements.

## Configuration and scope

The README instructs users to add the plugin in `babel.config.js`, set `reactNativeVersion` to the installed React Native version, and disable deep-import warnings in `@react-native/babel-preset`. It says the version must match exactly and every stable release from 0.70.0 has a map. After changing the setup, it says to reset the Metro cache once.

The README says re-exports and compiled CommonJS `require('react-native')` code, including code in `node_modules`, are rewritten. It says `Platform` remains a local variable so Metro's `Platform.OS` and `Platform.select` inlining works. It says unknown names and type-only imports are left untouched.

The README says namespace imports and `module.exports = require('react-native')` cause a build error. Generated paths target React Native internals. The README warns that every React Native version needs its own map.

## Compatibility and maturity

The README says Uniwind remains compatible because its Metro config redirects the generated deep imports. It warns not to combine the plugin with `react-native-worklets` bundle mode because that mode uses a shim that the deep paths skip.

The README labels the plugin early-stage and warns of rough edges and breaking changes. It gives `npm install --save-dev babel-plugin-react-native-direct-imports` as the install command. The repository and README list an MIT license.

## Evidence limits

This is a capture of repository statements. I did not install the package, build an app, inspect generated bundles, or run tests. The announcement is [src-2026-10-20-017]. The npm listing is [src-2026-10-20-019].
