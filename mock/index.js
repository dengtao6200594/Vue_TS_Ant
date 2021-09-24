const Mock = require('mockjs');
const fs = require('fs');
const path = require('path');
const JSON5 = require('json5');
//读取json文件
function getJsonFile(filePath) {
  //读取指定json文件
  var json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
  //解析并返回
  return JSON5.parse(json);
}
//返回一个函数
module.exports = function(app) {
  //监听http请求
  app.get('/api/user/login', function(rep, res) {
    //每次响应请求时读取mock data的json文件
    //getJsonFile方法定义了如何读取json文件并解析成数据对象
    var json = getJsonFile('./editor.json5');
    //将json传入Mock.mock方法中，生产数据并返回浏览器
    res.json(Mock.mock(json));
  });
  app.get('/api/user/info', function(rep, res) {
    let json;
    if (rep.query.user === 'admin') {
      json = getJsonFile('./admin.json5');
      res.json(Mock.mock(json));
    } else {
      json = getJsonFile('./editor.json5');
      res.json(Mock.mock(json));
    }
  });
};
