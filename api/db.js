var MongoClient = require("mongodb").MongoClient,
    assert = require("assert"); // to compare the value including deep equal and strict

var state = {
    db: null
}

exports.connect = function (url, done) {
    if (state.db) return done(err);
    MongoClient.connect(url, function (err, client) {
        //assert.equal(null, err);
        if (err) return done(err);
        var db = client.db('video');
        state.db = db;
        console.log("Successfully connected to server.");
        db.collection('movies').find({}).toArray(function (err, docs) {
            docs.forEach(doc => {
                console.log(doc);
            });
        });
        done();
    });
    
}

exports.get = function () {
    return state.db;
}

exports.close = function () {
    if (state.db) {
        state.db.close(function () {
            state.db = null
            state.mode = null
            done(err)
        });
    }
}

