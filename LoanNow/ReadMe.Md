# LOAN NOW APP

This is a simple movie application with backend and frontend seperated into different into different folders, i.e.
* BackEnd
* FrontEnd

Note: The frontend and backend application are hosted on different servers.

## Backend
The backend is an express application powered with a MongoDB DBMS. 

### iNSTALLATION
```
npm install
```

### Run application
```
npm start
#or
npm run dev
```

### Test Application (TDD)
```
npm test
```
#### Tests Implemented
Tests Implemented: **2** (Work In Progress)
* Test 1: Test the index route, i.e. GET '/' and expect route to return statuscode of 200
* Test 2: Test the get Movies route, i.e. GET '/movies' and expect route to return statuscode of 200
* ...

### Miscellenous
* Application Entrypoint: server.js
* Application uses environment variable. Details on this implemention of this is given in the section dedicated to **Environemnt Variables**

### Environemnt Variables
Guide to implement enviroment variable:
* Create *.env* file in the root directory of the **"BackEnd"** folder. Create the following variables in the *.env* file:
  * SECRET
  * JWT_SECRET
  * DATABASE_URI, e.g *DATABASE_URI='mongodb+srv://\<username\>:\<password\>@cluster0.wrcgj.mongodb.net/\<dbName\>?retryWrites=true&w=majority'

## FrontEnd

### Comments for Front end below here

### Test Application (TDD)
```
npm test
```
#### Tests Implemented
Tests Implemented: **0** (Work In Progress)
* ...