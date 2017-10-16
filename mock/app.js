var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/user/list', (req, res) => {
  console.log(req.query)
  res.send({
    data: [],
    code: 200,
    msg: '用户列表获取成功'
  })
})

app.get('/user/detail/:user_id', (req, res) => {
  console.log(req.params)
  res.send({
    data: [],
    code: 200,
    msg: '用户详情获取成功'
  })
})

app.post('/user/add', (req, res) => {
  console.log(req.body)
  res.send({
    data: [],
    code: 200,
    msg: '用户添加成功'
  })
})

app.put('/user/edit/:user_id', (req, res) => {
  console.log(req.params)
  console.log(req.body)
  res.send({
    data: [],
    code: 200,
    msg: '用户编辑成功'
  })
})

app.listen(3000, () => {
  console.log('mock 服务已启动，端口号：3000')
})

