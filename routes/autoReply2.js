

var createxml = require('./createxml');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var rawBody = require('raw-body');
var fs = require('fs');
var util = require('../lib/util');
var getForm = require('./connection')

function autoReply(msg,wechat){
  var message = util.formatMsg(msg);
  var yon =  yield getForm.getcontentFromDB(message.FromUserName);
  console.log('yon:'+yon);
  if(!yon){
     getForm.insert_openID(message.FromUserName);
     getForm.insert_content(0,message.FromUserName);
     console.log('写入成功')
  }else{
    var now = (new Date().getTime());
    console.log('不可重复报名');
    return createxml({
      ToUserName:message.FromUserName,
      FromUserName:message.ToUserName,
      MsgType:'text',
      Content:'不可重复报名',

    });
     }

  var go =  getForm.getopenIDfromDB(message.FromUserName);
  var inddex =  getForm.getcontentFromDB(message.FromUserName);
  

  if(message.MsgType === 'text' ){
    console.log('inddex'+inddex)
    console.log('go'+go)
    var content = message.Content;
    if(content === '报名'&&(inddex == null || inddex =='')){
      var now = (new Date().getTime());
      inddex +=1;
       getForm.insert_content(message.FromUserName,inddex);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName :message.ToUserName,
        MsgType:'text',
        Content:'你想报什么项目',
      });
      console.log('报名');
    }
  }
}
    }else if(content ==='男单' && inddex.indexOf('1')!=null){
        var now = (new Date().getTime());
        inddex += 1;
        console.log(inddex);
         getForm.insert_content(message.FromUserName,inddex);
         getForm.insert_comp(content,FromUserName);
        return createxml({
        ToUserName:message.FromUserName,
        FromUserName :message.ToUserName,
        MsgType:'text',
        Content:'请输入你的姓名',
      });
      console.log('男单');
    }else if(content ==='男双'&& inddex.indexOf('1')!=null){
      var now = (new Date().getTime());
      inddex += 1;
      console.log(inddex);
       getForm.insert_content(message.FromUserName,inddex);
       getForm.insert_comp(content,FromUserName);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:ToUserName,
        MsgType:'text',
        Content:'请输入你的姓名',
      });
    }else if(inddex.indexOf('2')!= null &&content!=''){
      var now = (new Date().getTime());
      inddex += 1;
      console.log(inddex);
       getForm.insert_content(message.FromUserName,inddex);
       getForm.insert_name(content,message.FromUserName);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:ToUserName,
        MsgType:'text',
        Content:'请输入你的性别',
      });
    }else if(inddex.indexOf('3')!=null &&content!=''){
      var now = (new Date().getTime());
      inddex += 1;
      console.log(inddex);
       getForm.insert_content(message.FromUserName,inddex);
       getForm.insert_name(content,message.FromUserName);
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:ToUserName,
        MsgType:'text',
        Content:'请输入你的学号',
      });
    }else if(inddex.indexOf('4')!=null&&content!=''){
     var now = (new Date().getTime());
     inddex += 1;
     console.log(inddex);
      getForm.insert_content(message.FromUserName,inddex);
      getForm.insert_number(content,message.FromUserName);
     return createxml({
      ToUserName:message.FromUserName,
      FromUserName:ToUserName,
      MsgType:'text',
      Content:'请输入你的专业',
     });
    }else if(inddex.indexOf('5')!=null&&content!=''){
      var now = (new Date().getTime());
      inddex += 1;
      console.log(inddex);
       getForm.insert_content(message.FromUserName,inddex);
       getForm.insert_subject(content,message.FromUserName);
      return createxml({
       ToUserName:message.FromUserName,
       FromUserName:ToUserName,
       MsgType:'text',
       Content:'请输入你的联系方式',
      });
      }
    }else if(inddex.indexOf('6')!=null&&content!=''){
     var comp =  getForm.getcompDB(message.FromUserName);
     inddex += 1;
     console.log(inddex);
      getForm.insert_content(message.FromUserName,inddex);
      getForm.insert_phone(content,message.FromUserName);
     if(comp === '男单'){
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:ToUserName,
        MsgType:'text',
        Content:'报名成功',
      });
    }else{
      return createxml({
        ToUserName:message.FromUserName,
        FromUserName:ToUserName,
        MsgType:'text',
        Content:'请输入你的搭档姓名',
      });
     }
    }else if(inddex.indexOf('7')!=null&&content!=''){
      inddex += 1;
     console.log(inddex);
      getForm.insert_content(message.FromUserName,inddex);
      getForm.insert_partner(content,message.FromUserName);
     return createxml({
      ToUserName:message.FromUserName,
      FromUserName:ToUserName,
      MsgType:'text',
      Content:'报名成功',
     });
    }
   }
 


module.exports = autoReply;