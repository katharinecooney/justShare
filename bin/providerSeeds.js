const mongoose = require('mongoose');
const Provider = require('../models/user');

const dbName = 'providerData';
mongoose.connect(`mongodb://localhost/${dbName}`);

const shop = [
  { establishmentName: 'De Pa Xocolata',
    address: {
      street: 'Carrer de la Marina,888',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '911111'
    },
    product: [],
    password: '911111',
    picture: ' '
  },
  { establishmentName: 'SKI Coffee',
    address: {
      street: 'Career de Pamplona, 777',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: 922222
    },
    product: [],
    password: '922222',
    picture: ' '
  },
<<<<<<< HEAD
  { establishmentName: 'Sonora Sport Tavern',
    location: {
      type: 'Point',
      coordinates: [41.3975248, 2.1910079],
    }
      address: {
      street: 'Career de Pamplona, 96',
=======
  { establishmentName: 'Sport Bar',
    address: {
      street: 'Career de Pamplona, 999',
>>>>>>> d6718b1a235afcc4caf3b6b8765bdc08b44568e5
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '933333'
    },
    product: [],
    password: '933333',
    picture: ' '
  },
  { establishmentName: 'All you love is eat',
    address: {
      street: 'Carrer de la Marina, 555',
      city: 'Barcelona',
      neighborhood: 'Vila Olimpica'
    },
    contact: {
      email: null,
      phone: '944444'
    },
    product: [],
    password: '944444',
    picture: ' '
  },
  { establishmentName: 'Yummy Sushi',
    address: {
      street: 'Avinguda Diagonal, 1111',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '955555'
    },
    product: [],
    password: '955555',
    picture: ' '
  }

];

Provider.create(shop, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${shop.length} shop`);
  mongoose.connection.close();
});
