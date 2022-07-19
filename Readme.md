# [System_backend](https://app.swaggerhub.com/apis-docs/q1124/System_backend/1.0.0)

# Technique & skill
* node.js
* postman
* express
* [nodemon](sudo npm install -g --force nodemon)
* [swagger](https://app.swaggerhub.com/apis-docs/q1124/System_backend/1.0.0)
* [MongoDB](https://www.mongodb.com/)

# plugin
* [body-parser](https://israynotarray.com/nodejs/20210326/2926076225/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* gravatar
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [passport-jwt](https://www.npmjs.com/package/passport-jwt)
* passport 
* [concurrently](https://www.npmjs.com/package/concurrently)


```
  "scripts": {
    ---- 前後端模塊 ----
    "client-install": "npm install --prefix client",
    ---- 起動前端模塊 ----
    "client": "npm start --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    ---- 啟用前後端 ----
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  }

