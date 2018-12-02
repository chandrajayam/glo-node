const config = require('../../config/config');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/**
 * Creates document in mongoDB
 * @param {*} req
 * @param {*} res
 */

const saveChoice = (req, res, next) => {
    console.log('Inside controller ', req.body)

    if (req.body) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { _id: req.body._id, _game: req.body._game };
            dbo.collection("customersChoice").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
                res.status(500);
                res.json("Error while inserting doc", err)
            });
        });
    } else {
        res.status(500);
        res.json("Request body is missing")
    }

    res.status(200);
    res.json("saved Successfully")
};
module.exports = {
    saveChoice,
};
