var User = require('../models/user');
var mongoose = require('mongoose');

(async function () {

  mongoose.connect('mongodb://localhost/app', {
    user: 'lk.akadplus.ru',
    pass: 'CWWUwXFXOOw1UCJXIjef',
    auth: {authdb:"app"},
    server: {
    socketOptions: {
        keepAlive: 1
      },
      poolSize:      5
    }
  });

await User.findOneAndUpdate({vkId: '19681019'}, {$set: {role: 'admin'}}, {new: true})

await User.findOneAndUpdate({vkId: '2385621'}, {$set: {role: 'admin'}}, {new: true})

await User.findOneAndUpdate({vkId: '223412231'}, {$set: {role: 'admin'}}, {new: true})

await User.findOneAndUpdate({vkId: '18373257'}, {$set: {role: 'admin'}}, {new: true})

mongoose.disconnect();
}) ()
