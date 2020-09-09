const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const MongoClient = require('mongodb').MongoClient

const port = 8000
const url = 'mongodb://localhost:27017'
const dbName = 'todos'

const client = MongoClient(url, {
  useUnifiedTopology: true
})

app.post('/', (req, res) => {
  client.connect(err => {
    if (err) return console.log(err)
    const db = client.db(dbName)
    findTodos(db, todos => {
      res.json({ todos: todos })
      client.close()
    })
  })
})

app.post('/new-todo', (req, res) => {
  client.connect(err => {
    if (err) return console.log(err)
    const db = client.db(dbName)
    addTodo(db, req.body.todo, () => {
      client.close()
      res.end('ok')
    })
  })
})

app.listen(port, () => {
  console.log('Is this thing on?', port)
})

const findTodos = (db, cb) => {
  const collection = db.collection('todos')
  collection.find({}).toArray((err, todos) => {
    if (err) return console.log(err)
    console.log('found these\'ums:')
    console.log(todos)
    cb(todos)
  })
}

const addTodo = (db, todo, cb) => {
  const collection = db.collection('todos')
  collection.insertOne(
    {
      todo: todo,
      completed: false
    }
    , (err, result) => {
      if (err) return console.log(err)
      console.log(`Inserted ${result} into collection`)
      cb(result)
    })
}
