var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
   documents: [{
   type: mongoose.Schema.ObjectId,
   ref: 'Document'
  }]
});

var documentSchema = new mongoose.Schema({
    author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
    },
    collabors: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    title: String,
    content: String
});

var User = mongoose.model('User', userSchema);
var Document = mongoose.model('Document',documentSchema);


export default {User , Document}