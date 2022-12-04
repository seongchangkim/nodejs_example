// express 앱을 가져옴
const express = require('express')
// express를 새로 만듬
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dunkim:1234@example.bsoyb4s.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.error(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})