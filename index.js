const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')
const db_name = 'tec';
mongoose.connect('mongodb://localhost:27017/' + db_name, { useNewUrlParser: true, useUnifiedTopology: true });
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());
const Rainmaker = mongoose.model('Rainmaker', { name: String, major: String, age: Number });
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body)
    console.log('hello')
    const rainmaker = new Rainmaker({ name: req.body.name, major: req.body.major, age: req.body.age });
    rainmaker.save(function (err) {
        if (err) throw err;
        res.json({ 'status': 200, 'result': rainmaker, 'message': "Rainmakers inserted successfully" });
    });
})

app.get('/', cors(), (req, res) => {
    // Get all rainmakers from database
    Rainmaker.find({}, function (err, rainmakers) {
        if (err) throw err;
        res.json({ 'status': 200, 'result': rainmakers, 'message': "Rainmakers retreived successfully" });
    })
})

app.get('/age', (req, res) => {
    // Get all rainmakers from database
    Rainmaker.find({ age: { $lt: req.body.age } }, function (err, rainmakers) {
        if (err) throw err;
        res.json({ 'status': 200, 'result': rainmakers, 'message': "Rainmakers retreived successfully" });
    })
})
app.delete('/rainmaker', (req, res) => {
    console.log(req.query)
    // Get all rainmakers from database
    Rainmaker.deleteOne({ _id: req.query.id }, function (err, rainmakers) {
        if (err) throw err;
        res.json({ 'status': 200, 'message': "Rainmaker deleted successfully" });
    })
})
app.put('/update', (req, res) => {
    // Get all rainmakers from database
    Rainmaker.find({ name: req.body.name }, function (err, r) {
        if (err) throw err;
        console.log("done");
        rainmaker.name = req.body.name;
        rainmaker.major = req.body.major;
        rainmaker.age = req.body.age;
        rainmaker.save(function (err) {
            if (err) throw err;
            res.json({ 'status': 200, 'result': rainmakers, 'message': "Rainmakers updated successfully" });
        });
    })
})
app.listen(port, () => console.log(`The app listening on port ${port}!`))