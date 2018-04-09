var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'ci991227',
    database:'coco',
    port:3306
})



app.post('/',function(req, res){
    res.setHeader('Access-Control-Allow-Origin','*')
    pool.getConnection(function(err,connection){
      if(err){
        console.log(err)
      }
      var sql=`select * from mbmd where status=${req.body.status}`
      connection.query(sql,function(err,data){
        if(err){
          console.log(err)
        }
        console.log(data)
        res.send(data)
        
        connection.end()
        
        
      })
    })


})


app.use('/add',function(req, res){
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
    }
    var sql=`INSERT INTO mbmd (name,sex,status) VALUES ('${req.body.name }','${req.body.sex}','${req.body.status}')`
    connection.query(sql,function(err){
      if(err){
        console.log(err)
      }else{
        connection.end()
      }
      
    })
  })


})


app.use('/del',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
      return
    }
    var sql = `delete from mbmd where id=${req.body.id}`
    connection.query(sql,function(err,data){
      if(err){
        console.log(err)
        return
      }
      res.send(data)
      connection.end()
    })



  })
})



app.listen(8000,function(){
    console.log('么么哒')
})