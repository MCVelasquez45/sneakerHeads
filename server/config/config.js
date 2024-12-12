const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/sneakerHeads';  // Added 'mongodb://' to the URL

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
