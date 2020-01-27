# axios

## axios请求方法
1. get: 获取数据
2. post: 提交数据(表单中+ 文件上传)
3. put: 更新数据(所有数据推送到后端)
4. patch: 更新数据(只将修改的数据推送)
5. delete: 删除数据


## axios并发请求
1. axios.all([]) (必须是数组)
```javascript
  axios.all([  
   axios.get('/data.json'),
   axios.get('/data1.json'),
  ]).then(
    axios.spread((dataRes, data1Res) => {
      console.log(dataRes, data1Res)
    })
  )
```


## axios实例
```javascript
  axios.all([  
   axios.get('/data.json'),
   axios.get('/data1.json'),
  ]).then(
    axios.spread((dataRes, data1Res) => {
      console.log(dataRes, data1Res)
    })
  )
```