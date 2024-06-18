# Book record Managment system

## Routes and Endpoints

### /users

POST:Creating a new user
GET:Get the list of all users

###/users/{id}

GET: Get a  user by ID
put:update a user by id
Delete:delete a user by their ID(if he/she have an issued book )(also need to make sure heshe has no penalty)

### /users/subscription-details/{id}
GET:Get user subscription details
    >>Data of subscription
    >>till when its vaild
    >>Fine if any

## /books

get:get all books
post:creating / adding a new book

### /books/{id}

get:getting a book by id
post:update a book by id

### /books/issued

get:Get all issued books

### /books/issued/withFine

get:get all issued books with fine

## subscriptions
>>basic(3 months)
>>standard(6 months)
>>premium(12 months)

npm init
npm i express
npm i nodemon --save-dev


mongodb+srv://baddamnaveena2003:naveena12@cluster0.mgep5oa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0