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
}

exports.getUser = function(req, res) {

}