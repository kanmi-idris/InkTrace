# GeekNative quick-start audit

## Source

- https://geekyants.github.io/geeknative/docs/start-here/quick-start/

## Requirements and workflow

The guide says `make doctor` checks Node, npm dependencies, contracts, Xcode and an iPhone simulator, Java, and the Android SDK. `make check` validates contracts and builds and tests all three apps. The first Android build downloads Gradle, JDK 21, and app dependencies.

The published setup command is:

```sh
npm create geeknative@latest my-app -- --name "My App" --id com.acme.myapp
```

The guide says this command copies the template, generates platform code, installs npm dependencies, and makes a first Git commit. It documents `--no-install` and `--no-git` to skip those actions. I did not run the command or install anything.
