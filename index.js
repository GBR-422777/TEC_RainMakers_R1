const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db_name = 'tec';

mongoose.connect('mongodb://localhost:27017/' + db_name, {useNewUrlParser: true});

const Rainmaker = mongoose.model('Rainmaker', { name: String, major: String, age: Number });

app.get('/', (req, res) => 
{
    const rainmaker = new Rainmaker({ name: "georges", major: "computer science", age: 20 });
    rainmaker.save().then(() => res.send('Hello World! georges is saved'));
})

app.listen(port, () => console.log(`The app listening on port ${port}!`))