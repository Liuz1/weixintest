var koa = require('koa');
var sha1 = require('sha1');
var getFrom = require('./connection');
var getRawBody = require('raw-body');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var util = require('../lib/util');
var path = require('path');
var wechat_file = path.join(__dirname,'../secret/config.txt');
var autoReply = require('./autoReply');

var prefix='https://api.weixin.qq.com/cgi-bin/';
var api ={
    access_token_ :'',
    access_token :prefix+'token?grant_type=client_credential',

}

function Wechat(opts){
    var that = this;
    // this.token = opts.token;
    this.appID = opts.appID;
    this.appSecret = opts.appSecret;
    this.getaccess_token = opts.getaccess_token;
    this.saveaccess_token = opts.saveaccess_token;

    // this.getaccess_token().then(function(data){
    //   try{
    //     data = JSON.parse(data);
    //   }catch(e){
    //     return that.updateaccess_token();
    //   }
    //   if(that.isValidaccess_token(data)){
    //     Promise.resolve(data);
    //   }else{
    //     return that.updateaccess_token();
    //   }
    // })
    // .then(function(data){
    //   console.log('data:'+data)
    //   that.access_token = data.access_token;
    //   that.expires_in = data.expires_in;
    //   that.saveaccess_token(data);
    //   console.log('成功储存!\n\n\n');
    // })
}

// Wechat.prototype.isValidaccess_token=function(data){
//   if(!data||!data.access_token||!data.expires_in){
//     return false;
//   }
//   var access_token_ = data.access_token_;
//   var expires_in = data.expires_in;
//   var now = (new Date().getTime());
//   if(now<expires_in){
//     return true;
//     console.log('access_token可用\n\n\n');
//   }else{
//     return false;
//     console.log('access_token不可用\n\n\n');
//   }
// }

// Wechat.prototype.updateaccess_token = function(){
//     var appID = this.appID;
//     console.log(appID);
//     var appSecret = this.appSecret;
//     console.log(appSecret);
//     var url = api.access_token+'&appid='+appID+'&secret='+appSecret;
//     return new Promise(function(resolve,reject){
//       request({url:url,json:true}).then(function(response){
//         console.log(response.body);
//       var data = response.body;
//       var now = (new Date().getTime());
//       var expires_in = now + (response.body.expires_in - 20)*1000;
//       var access_token = response.body.access_token;
//       data.expires_in = expires_in;
//       data.access_token = access_token;
//       resolve(data);

//     });
//     })
// }

module.exports = function(opts){
  var wechat = new Wechat(opts);
  return function *(next){
    var that = this;
    // console.log(this.query);
    var token = opts.token;
    var signature = this.query.signature;
    var nonce = this.query.nonce;
    var timestamp = this.query.timestamp;
    var echostr = this.query.echostr;
    var str = [token,timestamp,nonce].sort().join('');
    var sha = sha1(str);
    console.log('接收成功\n\n\n'+sha);
    if(this.method ==='GET'){
    if(sha === signature){
      this.body = echostr + '';
      console.log('匹配成功\n\n\n'+echostr);
    }else{
      this.body = 'false';
      console.log('匹配失败\n\n\n');
    }
  }else if(this.method==='POST'){
    if (sha!==signature){
      this.body ='post is wrong';
      return false;
      console.log('匹配失败\n\n\n');
    }
    var data = yield getRawBody(this.req, {
      length: this.length,
      limit: '1mb',
      encoding: this.charset
      
  });

  
    var message = yield util.parseXMLAsync(data);
    var msg = util.formatMsg(message.xml);
    var MsgType = msg.MsgType;
    var FromUserName = msg.FromUserName;
    var ToUserName = msg.ToUserName;
    var content = msg.Content;
    var openid = yield getFrom.getopenIDfromDB(FromUserName);
    // var flag = yield getFrom.getcontentFromDB(FromUserName);
    var flag0 = 'A';
    console.log('openid:'+openid);
    if(openid === -1){
            console.log('开始写入')
            yield getFrom.insert_openID(FromUserName);
            yield getFrom.insert_content(FromUserName,flag0);
            console.log('写入成功')
    }
    if(MsgType === 'text'){
         var xml = yield autoReply.autooreply(FromUserName,ToUserName,flag,content);
       }
      }
    // var xml = autoReply(message.xml);
    console.log(message);
    console.log(xml);

    this.status = 200;
    this.type = 'application/xml';
    this.body = xml;
    return this.body;
  }
}
