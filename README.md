# Diploma -Simple Transport Frontend
- [Website](https://simple-transport.netlify.app)

### Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
    - [Installation](#installation)
    - [Setup environment variables](#setup-environment-variables)
    - [Run the application](#run-the-application)
- [Author Info](#author-info)

---

## Description

Full-stack application that allows users to create an account and add a new vehicle up for rent.
Then these vehicles are available for rent to all other users and vehicles from other users are available for rent to the created user.
Admins can add, edit and delete all other information exept vehicles and users.

---

## Technologies

- Typescript
- ReactJS
- Styled Components
- Axios
- Thunder Client
- Nestify
- Git
- Github

---

## How To Use

#### Installation

Follow these instructions to install and setup the application

```bash
# Clone repository
$ git clone https://github.com/dadolyner/SimpleTransport-Frontend
```

```bash
# Install dependencies
$ npm i
```
#### Setup environment variables

```ts
// In the root directory create .env file 
// Fill the following variables (fill them with your own values)
// S3 Bucket configuration
REACT_APP_REGION
REACT_APP_BUCKET
REACT_APP_ACCESS_KEY_ID
REACT_APP_SECRET_ACCESS_KEY

// Server API URL
REACT_APP_SERVER_IP
```

#### Run the application

```bash
# Run the application
$ npm run start
```

## Author Info

- Github - [@dadolyner](https://github.com/dadolyner)