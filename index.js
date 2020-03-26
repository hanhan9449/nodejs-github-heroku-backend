const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=> {
    res.send('Hello express')
})
app.listen(PORT, ()=> {
    console.log(`start on ${PORT}`)
})
