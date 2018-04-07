var createxml = require('./createxml');
var util = require('../lib/util');
var mysql = require('mysql');
// var getForm = require('./connection');

function autoReply1(msg,wechat){
  var message = util.formatMsg(msg);
  var connection = mysql.createConnection({
    host:'peqtdjdewnxx.mysql.sae.sina.com.cn',
    user:'liuz',
    password:'xunlei555',
    port:'10322',
    database:'weixintest',

    });
    connection.connect();
    console.log('数据库连接成功');
  if(message.MsgType === 'text' ){
    var content = message.Content;
    if(content === 'A'|| content === 'a'){
      var now = (new Date().getTime());
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName :message.ToUserName,
        MsgType:'image',
        Content:'Wh8G8oMACDlybasVhUkDFC7FUz81g9LArGdldgW-Lr8WkgmEP4yuVKy1usNO-Fzn',
      });
      console.log('A');
    }else if(content ==='B'|| content === 'b'){
        var now = (new Date().getTime());
        return createxml({
        ToUserName:message.FromUserName,
        FromUserName :message.ToUserName,
        MsgType:'voice',
        Content:'q220Y4Q5wuGKl6nSdeEjxfrODCxiuIoqJChjSY4VSNYpB3zeLw3erwi5b1kAz-vJ',
      });
      console.log('B');
    }else if(content ==='C'|| content === 'c'){
      var now = (new Date().getTime());
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:message.ToUserName,
        MsgType:'text',
        Content:'上传照片吧兄弟'
      });
    }else if(content ==='D'|| content === 'd'){
            var now = (new Date().getTime());
            return createxml({
              ToUserName:message.FromUserName,
              FromUserName:message.ToUserName,
              MsgType:'text',
              Content:'上传照片吧兄弟'
            });
    }else if(content ==='照片'){
        var now = (new Date().getTime());
        return createxml({
          ToUserName:message.FromUserName,
          FromUserName:message.ToUserName,
          MsgType:'text',
          Content:'1'
        });
    }else if(content ==='语音'){
        var now = (new Date().getTime());
        return createxml({
          ToUserName:message.FromUserName,
          FromUserName:message.ToUserName,
          MsgType:'text',
          Content:'开始您的表演'
        });
    }else{
        var now = (new Date().getTime());
        console.log('\n\n\n用户说'+content);
        return createxml({
            ToUserName:message.FromUserName,
            FromUserName:message.ToUserName,
            MsgType:'text',
            Content:'emmmmmmmm'
          });
    }
  }else if(message.MsgType === 'image'){
      var now = (new Date().getTime());
      console.log('照片')
      console.log('\n\n用户是:'+message.FromUserName+'\n\n图片ID:'+message.MediaId+'\n图片url:'+message.PicUrl);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:message.ToUserName,
        MsgType:'text',
        Content:'好的呢'
      });
     
  }else if(message.MsgType === 'voice'){
      var now = (new Date().getTime());
      console.log('语音');
      console.log('\n\n用户是:'+message.FromUserName+'\n\n语音ID:'+message.MediaId);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:message.ToUserName,
        MsgType:'text',
        Content:'好的呢'
      });
      
  }
}

module.exports = autoReply1;