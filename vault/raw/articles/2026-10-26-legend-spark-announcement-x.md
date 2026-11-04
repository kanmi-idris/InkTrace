# Jay Meistrich’s Legend Spark announcement on X

Captured: 2026-10-26
Source URL: https://x.com/jmeistrich/status/2114659099392786444
Author: Jay Meistrich (@jmeistrich)

## Announcement and replies

The main post introduces Legend Spark as a React Native desktop framework built with React Native and Expo. The author says it targets gaps in desktop React Native: setup, Expo compatibility, and modules. The post says, “Let's make apps super fast,” but gives no measured performance results.

The thread says Spark is built on Birch’s Expo Desktop, with the aim of using one Expo project across platforms. Spark adds desktop modules such as window management and menu bar icons. It also includes patches for external libraries that lack desktop support. The author says he plans to submit support upstream and maintain patches until then.

The author says a prebuilt runner lets a new app run without Xcode or a native build. A custom build is available when an app needs extra native modules or needs publishing. He compares the runner to Expo Go.

The author says Legend’s apps, including Diff, Code, Music, Chat History, Photos, and Music, are built on Spark and act as a testbed. The list repeats Music.

The post points readers to https://legend.so/spark and describes the project as early. It asks users to report problems and feature requests. It says Windows support is still in progress and invites contributors.

In a later reply, the author says Windows support is mostly on a separate branch and may have gaps. He asks users to report libraries that do not work, so he can patch them or submit support upstream.

## Evidence limits

These are author statements. The post gives no benchmark data. Current official documentation is captured separately in [src-2026-10-26-002] and [src-2026-10-26-003]. The repository and npm registry are captured in [src-2026-10-26-004] and [src-2026-10-26-005]. I did not install, build, or test Spark.
