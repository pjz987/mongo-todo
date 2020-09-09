const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'todos'

const client = MongoClient(url, {
  useUnifiedTopology: true
})

client.connect(err => {
  assert.strictEqual(err, null)
  console.log('we in it')

  const db = client.db(dbName)

  client.close()
})

module.exports = { client }
