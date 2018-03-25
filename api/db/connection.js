var MongoClient = require("mongodb").MongoClient,
    assert = require("assert"); // to compare the value including deep equal and strict


exports.connect = function (url, cb) {
    if (exports.db) {
        cb(exports.db);
    }

    MongoClient.connect(url, function (err, client) {
        //assert.equal(null, err);
        if (err) return cb(err);
        var db = client.db('mongomart');
        
        //set the db ib global
        exports.database = db;
        
        console.log("Successfully connected to server.");
        db.collection('users').find({}).toArray(function (err, docs) {
            docs.forEach(doc => {
                //console.log(doc);
            });
        });
        cb();
    });
    
}

exports.close = function (db) {
    if (db) {
        db.close(function (err) {
            if(err) 
                console.log("issue with closing the connection")
            //cb(err)
        });
    }
}

