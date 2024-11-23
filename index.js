var express = require("express");

var cors = require("cors");

const port = process.env.PORT || 5000;

const bookRouter = require('./routes/Controllers/bookController')

// middleware
var app = express();
app.use(cors());
app.use(express.json());

app.use('/book', bookRouter)



app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
