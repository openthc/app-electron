# OpenTHC Electron Application

This app is the minimal scaffolding necessary for OpenTHC to deploy services in a desktop environment.

You can run directly from the repo-root or build and put on your machines.

    ./node_modules/.bin/electron ./

## Configuration

    ./node_modules/.bin/electron ./ --url=[application host]

Other configuration options may be specific to your build, or your companies build.
Typically these are stored in the application root as `config.json`.


## Building

* https://github.com/electron-userland/electron-builder/issues/3872

Building for Windows on Linux requires Wine.

    git clone
    npm update
    ./node_modules/.bin/electron-builder --windows
    ./node_modules/.bin/electron-builder --mac
    ./node_modules/.bin/electron-builder --linux

For Raspberry Pi

    ./node_modules/.bin/electron-builder --linux AppImage --armv7l


## Printing

Search: direct print a pdf document from electron to local printer

* https://stackoverflow.com/questions/49650784/printing-a-pdf-file-with-electron-js
* https://stackoverflow.com/questions/46012272/silent-printing-in-electron
* https://electronjs.org/docs/api/web-contents#contentsgetprinters
* https://electronjs.org/docs/api/web-contents#contentsprintoptions-callback


## Scale Integration

TODO: Improve serial port integration


## Lab Instruments

TODO: Improve Lab Instrument integrations
