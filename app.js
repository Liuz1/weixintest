var koa = require('koa');
var path = require('path');
var util = require('./lib/util');
var wechat = require('./routes/wechat');
var wechat_file = path.join(__dirname,'./secret/config.txt');

var config ={
  wechat:{
    appID:'wxe4dcd718d3a770b6',
    appSecret:'7cb099b5821eacbdad733526635ff6a4',
    token:'TJWweixin',
    access_token_:'',

    getaccess_token : function(){
      return util.readFileAsync(wechat_file);
      console.log('读取成功!\n\n\n');
    },
    saveaccess_token :function(data){
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file,data);
      console.log('写入成功!\n\n\n');
    }
  }
}

var app  = new koa();
app.use(wechat(config.wechat));

app.listen(1236)
console.log('正在监听1236');