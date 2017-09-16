## Synopsis

Simple app example using Express.JS (server-side) and React JS (client-side). Database models are managed by Sequelize (promise based ORM).

## Folder structure

This project is simple, there are two folders inside "bank-app":

1. bank-app-server (back-end).
2. bank-app-client (front-end).

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

## Dependencies

* npm - [3.10.8](https://docs.npmjs.com/getting-started/installing-node)
* node - [v6.11.3](https://nodejs.org/es/download/)
* mysql - [5.7.16](https://dev.mysql.com/downloads/mysql/)

## Installation guide

This tutorial is only for UNIX systems.
Server side will run on port 3001 and client side on port 3000 to avoid conflicts and simulate two diferent environments.

1. Config database parameters:

	Edit the config file ```bank-app/bank-app-server/config.json``` and change default parameters to your own project parameters:

	```
	{
	  "development": {
	    "username": "app",
	    "password": "password",
	    "database": "development-database",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  },
	  "test": {
	    "username": "root",
	    "password": "password",
		  "database": "test-database",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  },
	  "production": {
	    "username": "root",
	    "password": "password",
		  "database": "production-database",
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  }
	}

	```

2. Start the server side application:

	1. Open terminal and, from bank-app folder:

	```
	cd bank-app-server
	npm start
	```

	2. Once server has started, the console should show a message like this:

	```
	npm start

	> bank-app@0.0.0 start /private/var/www/html/bank-app/bank-app-server
	> node ./bin/www

	Executing (default): CREATE TABLE IF NOT EXISTS `charges` (`id` INTEGER NOT NULL auto_increment , `description` VARCHAR(255), `amount` FLOAT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
	Executing (default): SHOW INDEX FROM `charges`
	```

	The server will synchronyze automatically the database table and will create it if doesn´t exist.

3. Start the client side application:

	1. Open terminal and, from bank-app folder:

	```
	cd bank-app-client
	npm start
	```

	2. Once client has started, the console should show a message like this:

	```
	Compiled successfully!

	You can now view bank-app-client in the browser.

	  Local:            http://localhost:3000/
	  On Your Network:  http://192.168.1.78:3000/

	Note that the development build is not optimized.
	To create a production build, use npm run build.
	```

	You will be redirected to ```http://localhost:3000/``` on your default browser.

