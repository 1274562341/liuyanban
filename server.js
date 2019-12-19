/**
 * 在node环境下实现mysql，首先需要将mysql下载到本地。
 * cnpm install mysql
 * 数据库名：test,字段：id(自增),name,tel
 * 以下用Postman测试无误
 */
const express = require('express');
const app = express();
 
//解析表单等数据
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));//application/x-www-form-urlen
 

 
//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',//数据库地址,本地127.0.0.1||localhost
    user: 'root',//账号
    password: 'root',//密码
    database: 'vue',//库名
    multipleStatements: true //允许执行多条语句
});
 
 app.all('*', function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     res.header("X-Powered-By",' 3.2.1');
     res.header("Content-Type", "application/json;charset=utf-8");
     next();
  });
 
//查
app.get('/api/find', (req, res) => {
    const sqlStr = 'select * from user';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '数据不存在', affextedRows: 0});
        res.json({err_code: 200, message: results, affextedRows: results.affextedRows});
    })
});
 
//条件查找
app.get('/api/conditionFind', (req, res) => {
    console.log('query:' + req.query);
    const tel = req.query.tel;
    const sqlStr = 'select * from user where tel=?';
    conn.query(sqlStr, tel, (err, results) => {
        if (err) return res.json({err_code: 1, message: '数据不存在', affextedRows: 0});
        res.json({err_code: 200, message: results, affextedRows: results.affextedRows});
    })
});
 
//添加
app.post('/api/add', (req, res) => {
	const sql = 'insert into user(comment) values(?)';
	var params = req.body
    console.log(params);
    conn.query(sql,[params.comment],(err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '添加成功', affectedRows: results.affectedRows});
    })
});
 
//修改
app.post('/api/update', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    const sqlStr = "update user set name='" + name + "'where id=" + id;
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '修改成功', affectedRows: results.affectedRows});
    })
});
 
//删除
app.delete('/api/delete/:id', function (req, res) {
    console.log('params:' + req.params);
    let id = req.params.id;
    let sql = 'delete from user where id=' + id;
    conn.query(sql, id, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '删除成功', affectedRows: results.affectedRows})
    })
});
 
//端口监听
app.listen(1234, () => {
    console.log('监听端口1234,http://localhost:1234');
});


/* app.post('/api/add', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
	const comment = req.body.comment;
    const sqlStr = 'insert into user (name,comment) values('name','comment')';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '添加成功', affectedRows: results.affectedRows});
    })
}); */