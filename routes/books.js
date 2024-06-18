
const express = require("express");
const {books} = require("../data/books.json");

const router = express.Router();

/**
 * Route:/books
 * method:GET
 * Description: get all books
 * Access: public
 * Parameters: ID
 */

router.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        data: books,
    })
})

/**
 * Route:/books/:id
 * method:GET
 * Description: get book by their id 
 * Access: public
 * Parameters: ID
 */

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const book= books.find((each)=>each.id===id);
    if(!book){
        return  res.status(404).json({
            success: false,
            message: "book not Found"
        })
    }
    return res.status(200).json({
        success: true,
        data: book
    })


})


/**
 * Route:/books
 * method:POST
 * Description: create/Add a new book
 * Access: public
 * Parameters: ID
 */

router.post("/",(req,res)=>{
    const {id , name , author, genre , price ,publisher} =req.body;

    const book = books.find((each)=> each.id== id);

    if(book){
        return res.status(404).json({
            success: false,
            message: "User exit with given ID"
        })
    }

    books.push({id , name , author, genre , price, publisher})
    return res.status(201).json({
        success: true,
        data: books,
    })
})

/**
 * Route:/books/:id
 * method:Put
 * Description: updating a book by their id 
 * Access: public
 * Parameters: ID
 */

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} =req.body;

    const book = books.find((each)=> each.id== id);
    if(!book){
        return  res.status(404).json({
            success: false,
            message: "Book not Found"
        })
    }

    const updatedBook = books.map((each)=>{
        if(each.id===id){
            return {
                ...each,
                ...data
            }
        }
        return each;
    })

    return res.status(200).json({
        success: true,
        data:updatedBook
    })
})

/**
 * Route:/books/:id
 * method:delete
 * Description: deleting a user by their id 
 * Access: public
 * Parameters: ID
 */

router.delete("/:id",(req,res)=>{
    const {id} = req.params;

    const book = books.find((each)=> each.id== id);
    if(!book){
        return  res.status(404).json({
            success: false,
            message: "Book not Found"
        })
    }

    const index = books.indexOf(book)
    books.splice(index,1);

    return res.status(200).json({
        success:true,
        data:books
    })
})



module.exports = router;