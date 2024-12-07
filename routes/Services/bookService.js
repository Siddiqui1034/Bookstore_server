
const { getBookDAO, getBookByCategoryDAO, uploadBookDAO,  updateBookDAO , deleteBookDAO} = require('../DAO/bookDAO')
const {ObjectId} = require('mongodb')

async function getBookService() {
const allBook = await getBookDAO()
return allBook
}

async function getBookByCategoryService(category) {
  const allBook = await getBookByCategoryDAO(category)
  return allBook;
  }

async function uploadBookService(data){
const uploadData = await uploadBookDAO(data)
return uploadData
}

async function updateBookService(id, data){
  const filter = { _id: new ObjectId(id) };
  const updateDocuments ={  $set: {...data }};
  const options = { upsert: true };  // upsert: true will insert the document if it does not exist
  const updatedData = await updateBookDAO(filter, updateDocuments, options)
  return updatedData;
}

// this function will delete particular book with some id
async function deleteBookService(id){
const filter = {_id: new ObjectId(id)};
const deletedData = await deleteBookDAO(filter)
return deletedData;
}

module.exports = { getBookService, getBookByCategoryService, uploadBookService, updateBookService, deleteBookService  }


// insert a book to db: post method
// app.post("/upload-book", async (req, res) => {
//     const dbCon = await dbConnection();
//     const dbCollectionObj = await dbCon.collection("books");
//     const data = req.body;
//     const result = await dbCollectionObj.inserOne(data);
//     res.send(result);
//   });
  