This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

Install node modules using `npm i --legacy-peer-deps`
<br>Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## When to use what
--legacy-peer-deps is used when installing a package with peer dependencies that are not compatible with the installed version of the package manager. When this option is used, npm will not attempt to enforce the peer dependencies, and instead will install the package without them.

--force on the other hand simply sets a different peer dependency version for conflicting dependencies

## Webpack-based Application:

Pros:
1.Full control over the configuration of the build process.
2.Can be customized to include only the features and plugins that are necessary for the project.
3.Can be used for both React and non-React applications.
4.Offers more flexibility and control over the development environment.

Cons:
1.Requires more setup and configuration compared to CRA.
2.Can be difficult to set up for developers who are not familiar with Webpack.
3.More complex configuration may result in longer build times.
4.Development process can be slower due to manual setup and configuration.

## CRA-based React Application:

Pros:
1.Quick and easy to set up with no build configuration required.
2.Includes many preconfigured features, such as hot reloading, linting, and testing.
3.Provides a standardized and consistent development environment.
4.Can be used to create a new React application in a matter of minutes.

Cons:
1.Limited control over the configuration of the build process.
2.Limited ability to customize the build process to meet specific project requirements.
3.Can only be used for React applications.
4.Dependency on the CRA toolchain may be a disadvantage for advanced users who need more flexibility.

