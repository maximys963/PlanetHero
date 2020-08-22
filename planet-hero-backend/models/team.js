const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const teamSchema = new Scheme({
  name: {
    type: String,
    default: '',
  },
  members: {
    type: [],
    default: [],
  },
  imageURL: {
    type: String,
    default: '',
  },
});

const Teams = mongoose.model('Team', teamSchema);

module.exports = Teams;
