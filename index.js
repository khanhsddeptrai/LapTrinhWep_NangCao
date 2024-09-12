import http from 'http'
import date from './date.js'
import getURL from './getURL.js'

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.write(date() + "<br>")
    res.write(getURL.getPatch(req) + "<br>")
    res.write(getURL.getParamsURL(req) + "<br>")
    res.end('Hello KTPM0121, chuc may thanh cong')
}).listen(8080)



