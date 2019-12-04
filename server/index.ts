const express = require('express')
const _ = require('module-alias/register')
const app = express()
const port = 3000
const test1 = require('@user')

app.get('/', (_, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
