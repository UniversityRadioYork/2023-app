# 2023-App

## How to Install

Firstly make sure you have a development environment setup. You can set one up by following the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions up to the "Creating a new application" step.

Once you have cloned the project you will need to insert your development API key(s). To do this copy the apikeys.js.example file to apikeys.js and fill it out with your development api key(s).

You will then need to install dependancies for the project. To do so simply run the following in the project directory:

```bash
npm install
```

## How to run

To run the app locally you will first need to start a metro development server. To do this simply run the following in the project directory:

```bash
npm start
```

Then to run the app itself open a seperate terminal and run the following:

```bash
# developing for android
npm run android

# developing for IOS
npm run ios
```

If everything is set up correctly the app should open in an emulator. You can also run it on your device by connecting it via usb and enabling developer options.

If there are problems running your simulator try running react native doctor:

```bash
npx react-native doctor
```

NOTE: I do not own a mac so have been unable to test this project builds for IOS. In theory it should but theory will only take you so far.
