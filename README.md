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

NOTE: I do not own a mac so have been unable to test this project builds for IOS. In theory it should but theory will only take you so far.

# Comments from Colin

## README
For running both android an ios the relevant simulators must be installed - for android this comes with android studio, for ios this is bundled with xcode. 
ios steps require you to open simulator for cmd to attatch to.

include running to fix issues
```bash
npx react-native doctor
```

## Code Style
- I'd shy away from mixing Functional React components and Class based react components - stick with one or the other, normally Functional ones but you have leaned heavily into classes.
- Good breakdown of styles, perhaps seperate into files too for specific CSS Classes and really make sure names and obj paths are nice and descriptive (maybe look into BEM notation for this as its useful styling). Especially useful for global styles, less important for scoped ones unless large component or they cascade down through components
- I'd be keen to start moving 'business logic' out from the screens (normally called views just bcs sometimes its a partial screen) this may include:
    - Being even more aggressive with the requests object. Beak it down into a full Data Access Object so it can handle all the requests and it stores the result async. You can then have a single function call in the view that calls a function like 
    ```javascript
    async func called getShowImageURI (showId, state/setState/someCallback, ...) ->
    myRadioGetRequest('timeslot/' + this.showId)
			.then(response => {
				this.setState({
					currentImg: {
						uri: web.mainSite + response['payload']['photo'],
						headers: {Authorization: 'authToken'},
						priority: FastImage.priority.normal,
					},
				});
			})
			.catch(error => {});

    return Some Success or Failure
    ```
  - Another example may be the `ParseDateInt` function that can either go in a logic/controller folder in a file called currentAndNext or Home etc. Or it can be made into a generic Utils fuinction and placed in a File called utils. 

tl;dr Seperate logic and views, be aggressive with it, if a file is super long with a bunch of functions - maybe it should be two files.