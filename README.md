# Fashion Store

## Fashion Store Products Microservice

This submodule/microservice is apart of the fashion store project. It provides a REST API for managing products for the store.

### Technologies

Node.js, express, Mongoose, Mongo DB

### Setup

This service uses the Node.js "config" dependency for cross environment configurations. You can change the port this application runs on by going to config/default.json, and changing the value of server.port.

to configure the application to use your correct database credentials, follow these steps:

- Create a new file in /config called "development.json"
- Open config/development.json and add your credentials in this format:

{  
 "mongodb_config": {  
 "host": "localhost",  
 "username": "admin",  
 "password": "password",  
 "database": "fashion_store_products"  
 }  
}

- save config/development.json and close it
- create this environment variable which is directly related to the name of the .json file you just created:  
  export NODE_ENV=development
