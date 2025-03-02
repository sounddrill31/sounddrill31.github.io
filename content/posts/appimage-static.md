---
title: "Linux Packaging Experiments"
date: 2025-03-02
tags: ["linux", "app", "programming", "soarpkgs"]
categories: ["projects", "soar", ]
series: ["Projects"]
author: ["Souhrud Reddy"]
---

This Page is about Apps where I have recompiled/repackaged with static linking and usually in another container system like Wrappe or AppImage. The intention is to make it into a single, easy to run file.

Arguably easier than Windows' EXE files.

### *LibreSprite*:

Sent a PR to LibreSprite upgrading their old AppImage packaging script which used an add function into an elegrant solution using [sharun](https://github.com/VHSgunzo/sharun) and [AppImageTool](https://github.com/AppImage/appimagetool).

Should work with any linux distro for a supported arch, including MUSL based ones.

[PR Link](https://github.com/LibreSprite/LibreSprite/pull/522#event-16524339533)

### *Pixelpulse2*:
"Pixelpulse is a powerful user interface for visualizing and manipulating signals while exploring systems attached to affordable analog interface devices, such as Analog Devices' ADALM1000." Adapted Pixelpulse2 to AppImage format using [AppImageTool](https://github.com/AppImage/appimagetool) for packing and [sharun](https://github.com/VHSgunzo/sharun) for handling dependencies.

I needed this for my course's lab session where I needed an Adalm1000 to demonstrate Lab Experiments but the upstream expected linux users to compile it themselves which is a pain since that involves wrestling with platform-specific Qt packages. By deferring it to a Github Actions workflow, this also allowed me to be inclusive of aarch64 users.

Should work with any linux distro for a supported arch, including MUSL based ones.

Officially Maintaining Pixelpulse2 package for Soar!

[Website](https://sounddrill31.github.io/Pixelpulse2/)

[Source](https://github.com/pkgforge-dev/Pixelpulse2-AppImage)

[Source(Upstream)](https://github.com/analogdevicesinc/Pixelpulse2)