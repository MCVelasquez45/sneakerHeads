const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/sneakerHeads';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`mongoose is up and running on ${dbUrl}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`mongoose has an error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`mongoose is disconnected`);
});
