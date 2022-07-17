# Paint App Conclusion

  1. In this project, a user can Signup, Login with credentials, after successful login, it redirects to dashboard page
  2. Used React and Bootstrap for building UI
  3. Used Express on top of NodeJs in backend
  4. Build API with Express and used these endpoints in the frontend by axios to interact with the backend part
  5. Used MongoDB as the Nosql database to store data in JSON format
  6. Integrated JWT, bCrypt for Authentication


# Steps Used to create this Application

1. Created a client side & server side folders to differentiate frontend and backend

2. In server side (backend)-> 

            * Initialized a empty package.json file
            * Defined a PORT and connected with mongodb 27017
            * Installed packages like express, body-parser,cors, mongoose etc...
            * Created a userSchema, productSchema in Models folder
            * Defined functions for Signup, Login, Get user etc.. in controllers folder
            * Created userRoutes, productRoutes in routes folder
            * Implemented "bcrypt" for hashing user password
            * Created "jwt-web-token" for user
            * Checked Signup, Login, getUser by Id etc.. with postman
            * Checked CRUD concept for user with postman
            
 3. In client side (frontend)->
 
            * Created a app using the command "npx-create-react-app ./"
            * Installed npm packages like axios, react-router-dom@6, bootstrap etc...
            * Created & designed components for Signup from, Login form using bootstrap
            * Created and designed Dashboard page, Error page 
            * Navigated using react-router
            * Signup and Login process completed (user can signup, then login to dashboard with credentials)
            
            
# Steps to run the Application
   1. Clone the repo.
   2. Make sure that you have installed node.
   3. within the server directory, run: npm i && npm start
   4. Navigate to the client directory and run: npm i && npm start
   5. Make sure both client and server are running.
   6. You can go to localhost:3000 from your browser and test the app.
