const express = require("express");

const {
  getBookService,
  getBookByCategoryService,
  uploadBookService,
  updateBookService,
  deleteBookService,
} = require("../Services/bookService");

var router = express.Router();

// insert a book in the database
router.post("/upload-book", async (req, res, next) => {
  try {
    const data = req?.body;
    const result = await uploadBookService(data);
    res.send(result);
  } catch (ex) {
    console.log("controller", ex.message);
  }
});

// get all books from the database
router.get("/all-books", (req, res, next) => {
  try {
    (async function () {
      const result = await getBookService();
      res.send(result);
    })();
  } catch (ex) {
    res.send(ex.message);
  }
});

// get books by category from the database
router.get("/all-books", async(req, res, next) => {
  try {
    const category = req.query?.category;
    console.log(category);
    const result = await getBookByCategoryService(category);
    console.log(result);
    if (result.length === 0) {
      return res.status(404).send("No items found for this category");
    }
    console.log(result);
    // res.send(result);
    res.json(result);
  } catch (ex) {
    res.send(ex.message);
  }
});

// update a book in database
router.patch("/update-book/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedDocs = req.body;
    (async function () {
      const result = await updateBookService(id, updatedDocs);
      res.send(result);
    })();
  } catch (e) {
    console.log("updateBookController", e.message);
  }
});

// delete the book from the database
router.delete("/delete-book/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log("Book ID to delete:", id);
  try {
    const result = await deleteBookService(id);
    console.log("Delete result:", result);
    res.send(result); // Send the result back to the client
  } catch (e) {
    console.error("Error deleting book:", e.message);
    res.status(500).send({ error: e.message }); // Send an error response
  }
});

module.exports = router;

// End Points
// app.get("/", (req, res) => {
//     res.send("hello");
//   });
