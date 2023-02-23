
# LAB - Class 08

## Project: auth-api

### Author: Marco Villafana

### Problem Domain  

Implement Role Based Access Control (RBAC) using an Access Control List (ACL), allowing to not only restrict access to routes for valid users, but also based on the individual permissions we give each user.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/villafanam/auth-api/actions) 
- [GitHub PR](https://github.com/villafanam/auth-api/pull/1) 
- [back-end server url](https://auth-api-icv2.onrender.com) 


### Setup

#### `.env` requirements (where applicable)

```
PORT=3001
DATABASE_URL=postgres://localhost:5432/api-app
SECRET=insertyoursecret
```

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature 1: Combine these 2 servers into a single server
  - POST: `/signup` to create a user.
  - POST: `/signin` to login a user and receive a token.
  - GET: `/secret` should require a valid bearer token.
  - GET: `/users` should require a valid token and “delete” permissions.

- Feature 2: Create a new set of “Protected” API routes
  - Create a new set of routes (V2) within the server.
  - V2 API Routes `/api/v2/...` must now be protected with the proper permissions based on user capability, using Bearer Authentication and an ACL
    - `app.get(...)` should require authentication only, no specific roles.
    - `app.post(...)` should require both a bearer token and the create capability.
    - `app.put(...)` should require both a bearer token and the update capability.
    - `app.patch(...)` should require both a bearer token and the update capability.
    - `app.delete(...)` should require both a bearer token and the delete capability.


#### Tests

- AUTH Routes
  - POST: `/signup` should create a new user and send an object with the user and the token to the client.
  - POST: `/signin` should use basic authentication headers logs in a user and sends an object with the user and the token to the client.

#### UML

Link to an image of the UML for your application and response to events
