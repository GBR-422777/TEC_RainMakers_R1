const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db_name = 'tec';

mongoose.connect('mongodb://localhost:27017/' + db_name, {useNewUrlParser: true});

const Rainmaker = mongoose.model('Rainmaker', { name: String, major: String, age: Number });

const georges = new Rainmaker({ name: "georges", major: "computer science", age: 20 });
georges.save().then(() => console.log('georges'));
const atrach = new Rainmaker({ name: "atrach", major: "computer science", age: 60 });
atrach.save().then(() => console.log('atrach saved'));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`The app listening on port ${port}!`))