import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`API listen to port: ${PORT}`)
  }
})
