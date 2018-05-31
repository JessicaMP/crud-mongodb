const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

// app.listen(7000, function () {
// 	console.log('listening on 7000');
// })

// app.get('/', (req, res) => {
// 	// res.send('Hello World')
// 	res.sendFile(__dirname + '/index.html')
// })

// 

// app.post('/quotes', (req, res) => {
// 	console.log(req.body)
// })
var db 

MongoClient.connect('mongodb://JessicaMP:Tismart2018@ds121599.mlab.com:21599/crud-mongodb', (err, client) => {
	if (err) return console.log(err)
  db = client.db('crud-mongodb')  // whatever your database name is
  app.listen(process.env.PORT || 7000, () => {
    console.log('listening on 7000')
  })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
res.render(view, locals)


app.get('/', (req, res) => {
	// Muestra el html
  res.sendFile(__dirname + '/index.html')
  // let cursor = db.collection('quotes').find()
  db.collection('quotes').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

