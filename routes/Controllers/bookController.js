const express = require("express")

const {getBookService, uploadBookService, updateBookService, deleteBookService} = require('../Services/bookService')


var router = express.Router()

// get all books from the database
router.get("/all-books", (req, res, next) =>{
  try{
    (async function(){
      const result = await getBookService()
      res.send(result)
    })()
  }
  catch(ex){
    res.send(ex.message)
  }
})

// update a book pathc method
 router.patch("/update-book/:id", (req, res, next)=>{
  try{
    const id = req.params.id;
    const updatedDocs = req.body;
    (async function(){
      const result = await updateBookService(id, updatedDocs)
      res.send(result)
    })()
  }catch(e){
    console.log("updateBookController", e.message)
  }
 })

 // delete a book from the database and update the status of the book with the upadable document
 router.delete("/delete-book/:id", (req, res, next) => {
  try{
    const id = req.params.id;
    console.log(req.params.id)
    (async function(){
      const result = await deleteBookService(id)
      console.log(222, result)
      res.send(result)
    })()
  }catch(e){
    console.log("111", e.message)
  }
})


// insert a book in the database
router.post("/upload-book", async (req, res, next)=>{
  try{
    const data = req?.body;
    const result = await uploadBookService(data)
    res.send(result)
  }catch(ex){
    console.log("controller", ex.message)
  }
})



module.exports = router;


// End Points
// app.get("/", (req, res) => {
//     res.send("hello");
//   });