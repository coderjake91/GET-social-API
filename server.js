const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(require('./routes'));

//tell mongoose which database to connect too... if .env exists with MONGODB_URI (like heroku) OR local MongoDB database
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/social-network', {
    //mongoose config options, https://mongoosejs.com/docs/connections.html#options
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));