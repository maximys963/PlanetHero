const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventScheme = new Schema({
  name: {
    type: String,
    default: '',
  },
  teams: {
    type: [],
    default: [],
  },
  participants: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  },
  imageURL: {
    type: String,
    default: '',
  },
  location: {
    name: {
      type: String,
      default: '',
    },
    coords: {
      lng: {
        type: String,
        default: '0',
      },
      lat: {
        type: String,
        default: '0',
      },
    },
  },
  date: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const Events = mongoose.model('Event', eventScheme);

module.exports = Events;
