const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db_name = 'tec';
mongoose.connect('mongodb://localhost:27017/' + db_name, {useNewUrlParser: true});
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const Rainmaker = mongoose.model('Rainmaker', { name: String, major: String, age: Number });

app.post('/', (req, res) => 
{
    console.log(req.body);
    const rainmaker = new Rainmaker({ name: req.body.name, major: req.body.major, age: req.body.age });
    rainmaker.save().then(() => res.send("Hello a new Rainmaker was added: " + req.body.name));
})

app.get('/', (req, res) => 
{
    console.log(req.body);
    // Get all rainmakers from database
})

app.listen(port, () => console.log(`The app listening on port ${port}!`))