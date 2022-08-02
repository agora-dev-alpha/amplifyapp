

# amplifyapp

Here, we will follow and take notes on making a small, full stack application
using AWS, React, \& GraphQL.

## Module 1: Deploy and Host a React App

### 1.1: Create a new react application.

We use the commands:
```
npx create-react-app amplifyapp
cd amplifyapp
npm start
```
npx is an alias for `npm exec` which essentially runs a command
from a local or remote npm package.

In this case, `create-react-package` is the package we're using.
It then asks you to install it in the runtime.

### 1.2 Initialize a github repository

Create your package in a directory as shown above,
then simply make it a github repository

### 1.3 Log into AWS Management Console

Basically go to the AWS Console, and open the amplify tool

### 1.4 Deploy

There are two options:
1. Develop
2. Deploy
Option #2 allows us to develop locally, and deploy as a github branch!
How easy is that!

Pretty much step through the prompts until the app begins to deploy.
It will then trigger and re-deploy every time you push to a specific branch!

### 1.5 The Code!
I'm seeing mostly JS and css scripts as well as an svg (data)

#### index.js 
Which I'm sure aligns with the layout (left panel?)

#### tests 

#### App.js 
looks like it have the primary logic

## Module 2: Initialize a local amplify app

### install

```
npm install -g @aws-amplify/cli
```

### configure

This section made me set up the accessKeyID etc for User of the account 
where I set up my own permissions as Admin? I guess?

### Initialize the app

Get the `appId`

```
(base) ➜  amplifyapp git:(main) ✗ amplify pull --appId d1pzrdl11rgf5x --envName staging
Opening link: https://us-west-2.admin.amplifyapp.com/admin/d1pzrdl11rgf5x/staging/verify/?loginVersion=1
⠋ Confirm login in the browser or manually paste in your CLI login key:
✔ Successfully received Amplify Studio tokens.
Amplify AppID found: d1pzrdl11rgf5x. Amplify App name is: amplifyapp
Backend environment staging found in Amplify Console app: amplifyapp
? Choose your default editor: Vim (via Terminal, macOS only)
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you plan on modifying this backend? Yes
✔ Successfully pulled backend environment staging from the cloud.
✅

Successfully pulled backend environment staging from the cloud.
Run 'amplify pull' to sync future upstream changes.
```

at anytime you can access either the Amplify, or AWS console using:
```
(base) ➜  amplifyapp git:(main) ✗ amplify console
✔ Which site do you want to open? · AWS console
https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/d1pzrdl11rgf5x/YmFja2VuZA/staging
``` 

### Module 3: 
