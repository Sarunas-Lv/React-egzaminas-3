## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Routes](#routes)

## General info

This project is simple Lorem ipsum dolor generator.

## Technologies

Project is created with:

- Lorem version: 12.3
- Ipsum version: 2.33
- Ament library version: 999

## Setup

To run this project firstly create .env file in 2_backend folder. There set PORT = 5000 and MONGODB_URI = 'YOUR MONGO DB URI'. Afterwards install project locally using npm.
Do as stated bellow in chronologic order:

1. Navigate to backend and install npm, then start your backend

```
$ cd ./2_backend/
$ npm i
$ npm run nodemon
```

2. Navigate back, then navigate to 1_frontend and install npm, now start your frontend

```
$ cd ./1_frontend/
$ npm i
$ npm start
```

## Routes

GET: /api/users | Get all users

POST: /api/users/signup | Create new user

PUT: /api/users/:id' | Update single car based on

DELETE: /api/users/delete/:id | Delete single user based on it's id
cxzcxzczxcxzcxzcxzczxczxczxc
