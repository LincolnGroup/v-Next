# React-Webpack-Template
This is a sample template for copley@Next.

# Getting Started 
This quick start guide will teach you how to wire up TypeScript with [React](https://facebook.github.io/react/) and [Webpack](http://webpack.github.io/).
## Requirements
Node, To download [Click Here](https://nodejs.org/en/ "Node").  

Now we'll open the command prompt to use npm.

# Install our dependencies
First ensure TypeScript, Typings, and webpack are installed globally

```
npm install -g typescript typings webpack
```
Let’s now add React and React-DOM as dependencies to your package.json file:
```
npm install --save react react-dom
```
Next, we’ll add development-time dependencies on [ts-loader](https://www.npmjs.com/package/ts-loader) and [source-map-loader](https://www.npmjs.com/package/source-map-loader).
```
npm install --save-dev ts-loader source-map-loader
npm link typescript

```

Finally, we’ll use Typings to grab the declaration files for React and ReactDOM:
```
typings install --global --save dt~react
typings install --global --save dt~react-dom

```
This command will create a file called typings.json and a folder called typings in the current directory.














