const express = require('express')
const PORT = process.env.PORT || 5000
const http = require('http')

const server = http.createServer((req, res)=> {
	res.writeHead(200, { "Content-Type": "application/json"})
	res.end(JSON.stringify({test: "okay"}))
})
server.listen(PORT)