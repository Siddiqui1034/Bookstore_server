const dbConnection = require('../../utils/getConnection')

async function getBookDAO(){
const dbObj = await dbConnection()
const dbCollection = dbObj.collection("books")
const result = await dbCollection.find().toArray()
return result;

}

async function uploadBookDAO(data) {
    const dbObj = await dbConnection()
    const dbCollection = dbObj.collection("books")
    const result = dbCollection.insertOne(data)
    return result;
}

async function updateBookDAO(filter, updateDocuments, options){
    const dbObj = await dbConnection()
    const dbCollection =  dbObj.collection("books")
    const result = dbCollection.updateOne(filter, updateDocuments, options);
    return result;
    
}

async function deleteBookDAO(filter){
    const dbObj = await dbConnection()
    const dbCollection = dbObj.collection("books")
    const result = dbCollection.deleteOne(filter)
    console.log(result)
    return result;
}


module.exports = {
    getBookDAO,uploadBookDAO, updateBookDAO, deleteBookDAO
}