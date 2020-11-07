require('dotenv').config({ path: "./config/.env"});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//DB config
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => {throw new Error(err)});

//app init
const app = express();

//middlewares
app.use(bodyParser.json({ limit: '20mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

app.use('/api/hospital/info', require('./routes/hospitals/info'));
app.use('/api/plasmaDonor/info', require('./routes/plasmaDonor/info'));
app.use('/auth/hospital', require('./routes/hospitals/register'));
app.use('/auth/plasmaDonor', require('./routes/plasmaDonor/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});