const mongoose = require('mongoose');
const {DB_USER, DB_PW, DB_CONN} = process.env;

mongoose.connect(DB_CONN, {auth: {user: DB_USER, password: DB_PW }, useNewUrlParser: true, useUnifiedTopology: true}).then(() =>
    console.log('database connected')).catch(console.error);