const mongoose = require('mongoose');

const { Schema } = mongoose;

const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: {
    type: String,
    default: '',
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  achievements: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  },
  level: {
    name: {
      type: String,
      default: 'Newbie',
    },
    number: {
      type: Number,
      default: 0,
    },
    experience: {
      type: Number,
      default: 0,
    },
  },
  photoUrl: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
