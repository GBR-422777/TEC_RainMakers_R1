const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const db_name = 'tec';
mongoose.connect('mongodb://localhost:27017/' + db_name, { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const Rainmaker = mongoose.model('Rainmaker', { name: String, major: String, age: Number });

app.post('/', (req, res) => {
    console.log(req.body);
    const rainmaker = new Rainmaker({ name: req.body.name, major: req.body.major, age: req.body.age });
    rainmaker.save().then(() => res.send("Hello a new Rainmaker was added: " + req.body.name));
})

app.get('/', (req, res) => {
    // Get all rainmakers from database
    Rainmaker.find({}, function (err, rainmakers) {
        if (err) throw err;
        res.json({'status':200, 'result': rainmakers,'message':"Rainmakers retreived successfully"});
    })
})

app.get('/age', (req, res) => {
    // Get all rainmakers from database
    Rainmaker.find({age:{$lt:req.body.age}}, function (err, rainmakers) {
        if (err) throw err;
        res.json({'status':200, 'result': rainmakers,'message':"Rainmakers retreived successfully"}); 
    })
})
app.delete('/rainmaker/delete', (req, res) => {
    // Get all rainmakers from database
    Rainmaker.remove({name:req.body.name ,age:req.body.age}, function (err, rainmakers) {
        if (err) throw err;
        res.json({'status':200, 'message':"Rainmaker deleted successfully"}); 
    })
})
app.listen(port, () => console.log(`The app listening on port ${port}!`))