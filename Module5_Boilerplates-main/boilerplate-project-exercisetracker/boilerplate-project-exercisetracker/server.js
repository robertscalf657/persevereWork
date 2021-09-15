const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
