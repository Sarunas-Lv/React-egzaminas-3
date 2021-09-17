## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Routes](#routes)

## General info

This is third day'sof CodeAcademy JavaScript React Exam task . Which test skills of basic backend Node.js and frontend React logic.

## Technologies

Project is created with:

- "colors" version: "^1.4.0",
- "cors" version: "^2.8.5",
- "dotenv" version: "^10.0.0",
- "express" version: "^4.17.1",
- "mongoose" version: "^6.0.6",
- "node-fetch" version: "^3.0.0"
- "node" version : "14.17.5"
- "@testing-library/jest-dom" version: "^5.14.1",
- "@testing-library/react" version: "^11.2.7",
- "@testing-library/user-event" version: "^12.8.3",
- "axios" version: "^0.21.4",
- "react" version: "^17.0.2",
- "react-dom" version: "^17.0.2",
- "react-scripts" version: "4.0.3",
- "web-vitals" version: "^1.1.2"

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
$ cd ..
$ cd ./1_frontend/
$ npm i
$ npm start
```

## Routes

GET: /api/users | Get all users

POST: /api/users/signup | Create new user

PUT: /api/users/:id' | Update single car based on

DELETE: /api/users/delete/:id | Delete single user based on it's id
