

var getFrom = require('./connection');
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var rawBody = require('raw-body');
var createxml = require('./createxml');
var util = require('../lib/util');

// function autoreply(msg){
//     var msg = util.formatMsg(msg);
//     var that = this;
//     this.FromUserName = msg.FromUserName;
//     this.ToUserName = msg.ToUserName;
//     this.MsgType = msg.MsgType;
// }

exports.autooreply = function(FromUserName,ToUserName,inddex,content){
    return new Promise(function(resolve,reject){
    switch(inddex){
        // case 'Z':
        // var now = (new Date().getTime());
        //     console.log('不可重复报名');
        //     resolve( createxml({
        //       ToUserName:FromUserName,
        //       FromUserName:ToUserName,
        //       MsgType:'text',
        //       Content:'不可重复报名',   
        //     }))
        //     break;

        case 'A':
        if(content === '报名'){
        var now = (new Date().getTime());
                  inddex ='B';
                   getFrom.insert_content(FromUserName,inddex);
                  resolve( createxml({
                    ToUserName:FromUserName,
                    FromUserName :ToUserName,
                    MsgType:'text',
                    Content:'你想报什么项目',
                  }))
                }
                  break;
        
        case 'B':
        if(content ==='男单'){
            var now = (new Date().getTime());
            inddex ='D';
            console.log(inddex);
            getFrom.insert_content(FromUserName,inddex);
            getFrom.insert_comp(content,FromUserName);
            resolve( createxml({
            ToUserName:FromUserName,
            FromUserName :ToUserName,
            MsgType:'text',
            Content:'请输入你的姓名',
            }))
            break;
        }else if(content ==='男双'){
            var now = (new Date().getTime());
            inddex ='C';
            console.log(inddex);
            getFrom.insert_content(FromUserName,inddex);
            getFrom.insert_comp(content,FromUserName);
            resolve( createxml({
            ToUserName:FromUserName,
            FromUserName :ToUserName,
            MsgType:'text',
            Content:'请输入你的姓名',
            }))
            break;
        }else {
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请正确输入报名项目',
            }))
            break;
            
        }
        case 'C':
            if(content!==null){
            var now = (new Date().getTime());
            inddex ='D';
            console.log(inddex);
            getFrom.insert_content(FromUserName,inddex);
            getFrom.insert_name(content,FromUserName);
            resolve( createxml({
            ToUserName:FromUserName,
            FromUserName :ToUserName,
            MsgType:'text',
            Content:'请输入你的搭档姓名',
            }))
            break;
            }else if(content === null){
            var now = (new Date().getTime());
            resolve( createxml({
            ToUserName:FromUserName,
            FromUserName :ToUserName,
            MsgType:'text',
            Content:'姓名不能为空',
            }))
            break;
            }

        case 'D':
            if(content!==null){
                var now = (new Date().getTime());
                inddex ='E';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_name(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的性别',
            }))
            break;
            }else if(content === null){
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'姓名不能为空',
            }))
            break;
            }

            case 'E':
            if(content === '男'){
                var now = (new Date().getTime());
                inddex ='F';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_sex(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的学号',
            }))
            break;
            }else if(content === '女'){
                var now = (new Date().getTime());
                inddex ='F';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_sex(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的学号',
            }))
            break;
            }else {
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请正确输入报名项目',
            }))
            break;
            
            }

            case 'F':
            if(content!==null){
                var now = (new Date().getTime());
                inddex ='G';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_number(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的专业',
            }))
            break;
            }else if(content === null){
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'学号不能为空',
            }))
            break;
            }

            case 'G':
            if(content!==null){
                var now = (new Date().getTime());
                inddex ='H';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_subject(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的联系方式',
            }))
            break;
            }else if(content === null){
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'专业不能为空',
            }))
            break;
            }

            case 'H':
            if(content!==null){
                var now = (new Date().getTime());
                inddex ='I';
                console.log(inddex);
                getFrom.insert_content(FromUserName,inddex);
                getFrom.insert_phone(content,FromUserName);
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'请输入你的联系方式',
            }))
            break;
            }else if(content === null){
                var now = (new Date().getTime());
                resolve( createxml({
                ToUserName:FromUserName,
                FromUserName :ToUserName,
                MsgType:'text',
                Content:'专业不能为空',
            }))
            break;
            }

            case 'I':
                inddex ='Z';
                getFrom.insert_content(FromUserName,inddex);
                var now = (new Date().getTime());
                resolve( createxml({
                    ToUserName:FromUserName,
                    FromUserName:ToUserName,
                    MsgType:'text',
                    Content:'报名成功',
                }))
                break;

            // case 'G':
            //     inddex ='I';
            //     getFrom.insert_content(FromUserName,inddex);
            //     var now = (new Date().getTime());
            //     resolve( createxml({
            //     ToUserName:FromUserName,
            //     FromUserName:ToUserName,
            //     MsgType:'text',
            //     Content:'请输入你的搭档姓名',
            //     }))
            //     break;

            // case 'I':if(content!==null){
            //     var now = (new Date().getTime());
            //     inddex ='Z';
            //     console.log(inddex);
            //     getFrom.insert_content(FromUserName,inddex);
            //     getFrom.insert_name(content,FromUserName);
            //     resolve( createxml({
            //     ToUserName:FromUserName,
            //     FromUserName :ToUserName,
            //     MsgType:'text',
            //     Content:'请输入你的性别',
            //     }))
            //     break;
            //     }else if(content === null){
            //     var now = (new Date().getTime());
            //     resolve( createxml({
            //     ToUserName:FromUserName,
            //     FromUserName :ToUserName,
            //     MsgType:'text',
            //     Content:'姓名不能为空',
            //     }))
            //     break;
            //     }

            case 'Z':
            if(content ==='报名'){
                resolve( createxml({
                    ToUserName:FromUserName,
                    FromUserName :ToUserName,
                    MsgType:'text',
                    Content:'请不要重复报名啦',
                    }))
                    break;
                }
            }


            
        
    
    });
}

// module.exports = function(msg){
//     return function*(next){
//         var msg = util.formatMsg(msg);
//         var that = this;
//         this.FromUserName = msg.FromUserName;
//         this.ToUserName = msg.ToUserName;
//         this.MsgType = msg.MsgType;
//         var flag = '0';
//         var yon = yield getFrom.getopenIDFromDB(FromUserName);
//         console.log('yon:'+yon)
//         if(!yon){
//             yield getFrom.insert_openID(FromUserName);
//             yield getFrom.insert_content(flag,FromUserName);
//             console.log('写入成功')
//         }else{
//             var now = (new Date().getTime());
//             console.log('不可重复报名');
//             return createxml({
//               ToUserName:FromUserName,
//               FromUserName:ToUserName,
//               MsgType:'text',
//               Content:'不可重复报名',   
//             });
//              }
//              var go = yield getFrom.getopenIDfromDB(FromUserName);
//              var inddex = yield getFrom.getcontentFromDB(FromUserName);

//         if(MsgType === 'text' ){
//                 console.log('inddex'+inddex)
//                 console.log('openid'+go)
//                 var content = Content;
//             if(content === '报名'&&(inddex == null || inddex =='')){
//                   var now = (new Date().getTime());
//                   inddex ='1';
//                    getForm.insert_content(FromUserName,inddex);
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName :ToUserName,
//                     MsgType:'text',
//                     Content:'你想报什么项目',
//                   });
//                   console.log('报名');
//                 }
//               }
            
//         else if(content ==='男单' && inddex==='1'){
//                     var now = (new Date().getTime());
//                     inddex ='2';
//                     console.log(inddex);
//                      yield getForm.insert_content(FromUserName,inddex);
//                      yield getForm.insert_comp(content,FromUserName);
//                     return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'请输入你的姓名',
//                   });
//                   console.log('男单');
//                 }else if(content ==='男双'&& inddex==='1'){
//                   var now = (new Date().getTime());
//                   inddex ='2';
//                   console.log(inddex);
//                    yield getForm.insert_content(FromUserName,inddex);
//                    yield getForm.insert_comp(content,FromUserName);
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'请输入你的姓名',
//                   });
//                 }else if(inddex==='2' &&content!=''){
//                   var now = (new Date().getTime());
//                   inddex ='3';
//                   console.log(inddex);
//                    yield getForm.insert_content(FromUserName,inddex);
//                    yield getForm.insert_name(content,FromUserName);
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'请输入你的性别',
//                   });
//                 }else if(inddex==='3' &&content!=''){
//                   var now = (new Date().getTime());
//                   inddex ='4';
//                   console.log(inddex);
//                   yield getForm.insert_content(FromUserName,inddex);
//                   yield getForm.insert_name(content,FromUserName);
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'请输入你的学号',
//                   });
//                 }else if(inddex==='4'&&content!=''){
//                  var now = (new Date().getTime());
//                  inddex ='5';
//                  console.log(inddex);
//                   yield getForm.insert_content(FromUserName,inddex);
//                   yield getForm.insert_number(content,FromUserName);
//                  return createxml({
//                   ToUserName:FromUserName,
//                   FromUserName:ToUserName,
//                   MsgType:'text',
//                   Content:'请输入你的专业',
//                  });
//                 }else if(inddex==='5'&&content!=''){
//                   var now = (new Date().getTime());
//                   inddex ='6';
//                   console.log(inddex);
//                   yield getForm.insert_content(FromUserName,inddex);
//                   yield getForm.insert_subject(content,FromUserName);
//                   return createxml({
//                    ToUserName:FromUserName,
//                    FromUserName:ToUserName,
//                    MsgType:'text',
//                    Content:'请输入你的联系方式',
//                   });
//                 }else if(inddex==='6'&&content!=''){
//                  var comp =  yield getForm.getcompDB(FromUserName);
//                  inddex ='7';
//                  console.log(inddex);
//                  yield getForm.insert_content(FromUserName,inddex);
//                  yield getForm.insert_phone(content,FromUserName);
//                  if(comp === '男单'){
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'报名成功',
//                   });
//                 }else{
//                   return createxml({
//                     ToUserName:FromUserName,
//                     FromUserName:ToUserName,
//                     MsgType:'text',
//                     Content:'请输入你的搭档姓名',
//                   });
//                  }
//                 }else if(inddex==='7'&&content!=''){
//                   inddex ='8';
//                  console.log(inddex);
//                  yield getForm.insert_content(FromUserName,inddex);
//                  yield getForm.insert_partner(content,FromUserName);
//                  return createxml({
//                   ToUserName:FromUserName,
//                   FromUserName:ToUserName,
//                   MsgType:'text',
//                   Content:'报名成功',
//                  });
//                 }
//                } 
//     }
