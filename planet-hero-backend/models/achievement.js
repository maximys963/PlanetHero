const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const achievementScheme = new Scheme({
  name: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  cost: {
    type: String,
    required: true,
  },
});

const Achievement = mongoose.model('Achievement', achievementScheme);

module.exports = Achievement;
