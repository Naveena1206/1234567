const express = require("express");

const {users} = require("./data/users.json");


const PORT = 8081;// importing routers
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");



const app = express();



app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Server is up and running succesfully"
    })
})

app.use("/users",usersRouter);
app.use("/books",booksRouter);

// /**
//  * Route:/users/:id
//  * method:GET
//  * Description: Create/add new user
//  * Access: public
//  * Parameters: ID
//  */

// app.get("/users",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         data: users,
//     })
// })

// /**
//  * Route:/users/:id
//  * method:GET
//  * Description: get user by their id 
//  * Access: public
//  * Parameters: ID
//  */

// app.get('/users/:id',(req,res)=>{
//     const {id} = req.params;
//     const user = users.find((each)=>each.id===id);
//     if(!user){
//         return  res.status(404).json({
//             success: false,
//             message: "User not Found"
//         })
//     }
//     return res.status(200).json({
//         success: true,
//         data: user
//     })


// })

// /**
//  * Route:/users/:id
//  * method:POST
//  * Description: create/Add a new user
//  * Access: public
//  * Parameters: ID
//  */

// app.post("/users",(req,res)=>{
//     const {id , name , surname , email , subscriptionType ,subscriptionDate} =req.body;

//     const user = users.find((each)=> each.id== id);

//     if(user){
//         return res.status(404).json({
//             success: false,
//             message: "User exit with given ID"
//         })
//     }

//     users.push({id , name , surname , email , subscriptionType , subscriptionDate})
//     return res.status(201).json({
//         success: true,
//         data: users,
//     })
// })

// /**
//  * Route:/users/:id
//  * method:Put
//  * Description: updating a user by their id 
//  * Access: public
//  * Parameters: ID
//  */

// app.put("/users/:id",(req,res)=>{
//     const {id} = req.params;
//     const {data} =req.body;

//     const user = users.find((each)=> each.id== id);
//     if(!user){
//         return  res.status(404).json({
//             success: false,
//             message: "User not Found"
//         })
//     }

//     const updatedUser = users.map((each)=>{
//         if(each.id===id){
//             return {
//                 ...each,
//                 ...data
//             }
//         }
//         return each;
//     })

//     return res.status(200).json({
//         success: true,
//         data:updatedUser
//     })
// })


// /**
//  * Route:/users/:id
//  * method:delete
//  * Description: deleting a user by their id 
//  * Access: public
//  * Parameters: ID
//  */

// app.delete("/users/:id",(req,res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id== id);
//     if(!user){
//         return  res.status(404).json({
//             success: false,
//             message: "User not Found"
//         })
//     }

//     const index = users.indexOf(user)
//     users.splice(index,1);

//     return res.status(200).json({
//         success:true,
//         data:user
//     })
// })


app.all("*",(req,res)=>{
    res.status(404).json({
        message:"This Route doesn't exits "
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running  at a port ${PORT}`)
})


