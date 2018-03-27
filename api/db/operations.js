var db = require('./connection');

function sendResponse(err, res, data) {
    if(!err) {
        res.send({status:'ok', data: data});
    } else {
        res.end({status:'false', error: err})
    }
}

exports.addUser = function(req, res) {
    const { body  } = req;
    db.database.collection('users').insert(body, function (err, docs) {
        (!err) ? sendResponse(null, res, {success: true}) : sendResponse(err, res, null);
    });
}

exports.deleteUser = function(req, res) {
    var query = { id: parseInt(req.params.id) };
    db.database.collection('users').remove(query, function (err, doc) {
         (!err) ? sendResponse(null, res, {success: true}) : sendResponse(err, res, null);
    });
}

exports.updateUser = function(req, res) {
    const { body  } = req;
    db.database.collection('users').update({id: parseInt(body.id)}, {$set:{name:body.name,weight: body.weight}}, function (err, doc) {
        (!err) ? sendResponse(null, res, {success: true}) : sendResponse(err, res, null);
   });
}

exports.getUsers = function(req, res) {
    db.database.collection('users').find({}).toArray(function (err, docs) {
        sendResponse(null, res, docs);        
    });

    /** sorting*/
    /*db.database.collection('users').find({}).sort({name:1, weight: 1}).toArray(function (err, docs) {
        sendResponse(null, res, docs);        
    });*/

    // using projection we can select/remove the fields
    // if we give only 0 then projection will return all rest of the fields.
    // if we give both 0 and 1, projection will return only mentioned keys
    // if we give only 1, projection will return that particular key only except _id until we give 0 for id

    /*db.database.collection('users').find({}, {fields:{id:1,name:1}}).toArray(function (err, docs) {
        sendResponse(null, res, docs);        
    });*/

    /**limit */
    /*db.database.collection('users').find({}, {fields:{_id:0}}).limit(5).toArray(function (err, docs) {
        sendResponse(null, res, docs);        
    });*/

    /**skip */
    /*db.database.collection('users').find({}, {fields:{_id:0}}).limit(5).skip(5).toArray(function (err, docs) {
        sendResponse(null, res, docs);
    });*/
}

exports.getUser = function(req, res) {

}