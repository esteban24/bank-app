## Synopsis

Simple app example using Express.JS (server-side) and React JS (client-side). Database models are managed by Sequelize (promise based ORM).

## Folder structure

This project is simple, there are two folders inside "bank-app":

1. bank-app-server (front-end).
2. bank-app-client (back-end).

Structure:

```
bank-app
├── README.md
├── bank-app-client
|  ├── package.json
|  ├── public
|  |  ├── favicon.ico
|  |  ├── index.html
|  |  └── manifest.json
|  └── src
|     ├── App.css
|     ├── App.js
|     ├── App.test.js
|     ├── Create.js
|     ├── Header.js
|     ├── Home.js
|     ├── index.css
|     ├── index.js
|     └── registerServiceWorker.js
└── bank-app-server
   ├── app.js
   ├── bin
   |  └── www
   ├── config
   |  └── config.json
   ├── db.js
   ├── model
   |  └── charge.js
   ├── package.json
   └── routes
      └── api.js
```