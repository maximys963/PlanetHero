const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventScheme = new Schema({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: 'Lorem, ipsum dolor sit amet',
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
