var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-basic',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// 构建users的model
var usersSchema = mongoose.Schema({
    username: String,
    password: String
});

var Users = mongoose.model('users', usersSchema);

exports.Users = Users