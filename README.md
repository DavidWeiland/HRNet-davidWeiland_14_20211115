![shields](https://img.shields.io/badge/version-v0.1.0-blue)
![shields](https://img.shields.io/badge/make_with-React_in_create--react--app-red)
![shields](https://img.shields.io/badge/make_with-Redux-red)
![shields](https://img.shields.io/badge/make_with-styled--components-red)
![shields](https://img.shields.io/badge/use-jQuery-yellow)
![shields](https://img.shields.io/badge/use-datatables-yellow)
![shields](https://img.shields.io/badge/use-jquery--datetimepicker-yellow)
![shields](https://img.shields.io/badge/use-jquery--ui-yellow)
![shields](https://img.shields.io/badge/use-dw--react--modal-yellow)
![shields](https://img.shields.io/badge/author-David_Weiland-green)

# HRNET
## Converting html/jquery to react app

As part of the OpenClassroom training, in addition to the creation of a React app, this project aims to work on the integration of other libraries such as jquery.

Jquery is not compatible with react, so a react component must be implemented to replace the Jquery component. A modal component has been implemented.
The github repository is available [here](https://github.com/DavidWeiland/DW-Modal).
To see the module, go to the npm page [here](https://www.npmjs.com/package/dw-react-modal). When installing project locally, the ```yarn``` command downloads and installs this module.

## Technologies

- JavaScript (react, react-router, redux, react-redux, @reduxjs/toolkit)
- HTML
- CSS in React (styled-components)
- CSS
- JQuery (datatables, jquery-datetimepicker, jquery-ui )


## Available Scripts

In the project directory, you can run:

### Command `yarn start`

##### Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### The page will reload if you make edits.
You will also see any lint errors in the console.

##### Folders Structure
The src folder contains the development elements of the application :

- /Components : components of the application
  - DateTimePicker, 
  - SelectMenu, 
  - SelectOptions, 
  - Table

- /Data : collection of American states and their abbreviation
- /Features : reducers
- /Pages : Home, CurrentEmployees, Error
- /Utils : /styles (style.css), selectors (link to store), store
- index.jsx : ReactDom with Router and Provider

### Command `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

##### Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

##### The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

