const express = require('express')
const app = express()
const products = [
    {
        id : 1,
        name : 't-shirt'
    },
    {
        id : 2,
        name : 'pants'
    }
]

app.get('/',(req,res)=>{
    res.send('OK')
})

app.get('/api/v1/products',(req,res)=>{
    res.send(products)
})

app.get('*',(req,res)=>{
    res.status(404).send('Resource NoT Found')
})

app.listen(3300,()=>{
    console.log('server is running on port 3300')
})