---
title: "Github Action Projects"
date: 2024-09-03
tags: ["dos", "web", "github-pages"]
categories: ["projects", "websites"]
series: ["Projects"]
author: ["Souhrud Reddy"]
---

I have made a few useful github actions workflows to make my life easier and to help people:

### *Crave AOSP Builder*: 

Build Full Android ROMs - With Github Actions(Powered by Crave.io)

Android is usually very big - 250 to 450GB worth of source code, needs 64GB of memory for seamless compilation, etc. 

While not everyone has those resources, [Crave.io](https://crave.io) provides build systems to improve this, allowing anyone to learn android building. 

Here, I have made a github actions workflow to interface with crave - without any need for touching the terminal!

[Project Link](https://github.com/sounddrill31/crave_aosp_builder)

### *Local Manifest Generator*:

Generates and Uploads Local Manifests in xml format for use with google's repo tool. Also triggers workflow to test these Local Manifests against the ROM manifest to catch little errors early on.

These local manifests are used alongside ROM Manifests to clone device-specific sources alongside the ROM's source code in one go.

[Project Link](https://github.com/sounddrill31/actions_generate_local_manifests)

[Example Inputs](https://github.com/sounddrill31/actions_generate_local_manifests/blob/edf2cea2b973c793ae71d51a1c6c9d4a6f43b6be/oxygen.txt)

[Example Outputs](https://github.com/sounddrill31/local_manifests_oxygen/blob/d9bb0dc29b01c826ac582ae87ba43daa629ccbd5/local_manifests.xml)

### *Manifest Tester*:

Simple Workflow to run a short repo sync command so that we can test our ROM and Local Manifest files to catch little errors early on instead of after waiting 3-6 hours in queue for the build. 

(Also integrated into Crave AOSP Builder)

[Project Link](https://github.com/sounddrill31/Manifest_Tester)

### *Action Gradle Builder*:

Quickly build android apks, from source, leveraging github actions. Quite useful for testing and debugging or for one-off builds.

[Project Link](https://github.com/sounddrill31/action-gradle-builder)

