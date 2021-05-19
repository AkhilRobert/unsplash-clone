import express from 'express'
import './db'

const app = express()
const PORT = 5000 || process.env.PORT




app.listen(PORT, () => {
  console.log(`Server started at the port ${PORT}`)
})
