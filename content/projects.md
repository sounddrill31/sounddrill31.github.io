+++
title = "Projects"
slug = "projects"
+++

I have created, contributed to and participated in many small projects. Here are some projects I'm proud of

### *UPI Viewer*: 

A simple frontend for a UPI Powered Point of Sale System - Without using any external services or APIs!

Written in Kotlin, it makes phones as old as Android 4.2 into a fully functional minimal Point of Sale machine with features like "Dynamic QR Generator", " Split the Bill" mode, etc. 

[Project Link](https://github.com/zeusinstitute-oss/UPI-Viewer)

[Website](https://upi.zeusinstitute.com/)

This is ZeusInstitute OSS's first big project. I want to try to get it on F-Droid after alpha and try to get it on Play Store after stable release. I regularly post updates on both [linkedin](https://linkedin.com/in/souhrud-reddy) and [my fediverse profile](https://infosec.exchange/@sounddrill)

### *GPS Picture*:
A simple android camera app that overlays Location and date on the picture. There is a real need for this, especially in educational institutions to verify that sessions were actually conducted, and on time. 

Only apps that worked that met these needs were closed source apps with very annoying intrusive ads, so I wanted to make my own.

[Project Link](https://github.com/zeusinstitute-oss/GPSPic)

[Website](https://gps.zeusinstitute.com/)

This is ZeusInstitute OSS's second big project.

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

### *OpenDroid Wiki*:

Building android is very complex, needing a lot of expertise, calmness of mind, and a non-insignificant understanding of how these devices function. 

I contributed to early documentation(especially helping with Crave.io related documentation) and maintain a good chunk of this at the time of writing. 

[Website](https://opendroid.pugzarecute.com/wiki)

[My Content Contributions](https://github.com/opendroid-project/docs/commits/master/?author=sounddrill31)

[Content Source for Documentation](https://github.com/opendroid-project/docs)

### *Action Gradle Builder*:

Quickly build android apks, from source, leveraging github actions. Quite useful for testing and debugging or for one-off builds.

[Project Link](https://github.com/sounddrill31/action-gradle-builder)

### *SM64-PS2*: 

This project aims to port Super Mario 64 to the PlayStation 2, after it was decompiled. 

For a while, it refused to work on recent sdk versions on real hardware, despite improving performance. 

Made a few tweaks as suggested by @metchebe and @xdccrlz [here](https://github.com/fgsfdsfgs/sm64-port/issues/72#issuecomment-1265325542) and maintained it for a while. Also made a helper script to package it into an iso for easy OpenPS2Loader use!

The upstream repo seems to have fixed this issue, but when I tried it, my save got wiped :(   Still, I got pretty far in and enjoyed the game quite a bit!

[Source Code](https://github.com/sounddrill31/sm64-port)

### *Checkpost-Arduino*:

A simple arduino checkpost project, for a friend. Original code is from @SimpleCircuits, where I reposted and relicensed with permission. 

I fixed up the code and helped out with setting it up

[Source Code](https://github.com/sounddrill31/Checkpost-Arduino)

### *Turbo C++ Web*: 

Turbo C++ is quite widely used in the academic side in India, for some weird reason. I used JS-DOS's [Bundle Creation tool](https://dos.zone/studio-v8) and packaged @AvinashReddy3108's [TurboCPP4Linux](TurboCPP4Linux) with it to make a simple web wrapper for it

This is only a proof of concept and it's not very usable because quotes don't work on firefox/edge

[Demo](https://turboc.pages.dev)

[Source Code](https://github.com/sounddrill31/TurboCPP-Web)


Also made a similar one for Norton Editor Web

[Demo](https://sounddrill31.github.io/NortonEditor-Web/)

[Source Code](https://github.com/sounddrill31/NortonEditor-Web)

Also made a similar one for Costa GUI Web

[Demo](https://sounddrill31.github.io/Costa-Web/)

[Source Code](https://github.com/sounddrill31/Costa-Web)

### *Floorp OBS Workflow*:

OpenSUSE's repos didn't seem to have floorp browser so I made a repo that checks github releases regularly and repackages them for OBS. It's very rough around the edges but it works great even tho I haven't touched it in months.

[Repository](https://software.opensuse.org//download.html?project=home%3Asounddrill&package=floorp-browser)

### 
[Source Code](https://github.com/sounddrill31/floorp-browser-obs)
