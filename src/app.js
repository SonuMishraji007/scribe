const express = require('exprss')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Run')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

