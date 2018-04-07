

function createxml(messageObj) {
    var { ToUserName, FromUserName, MsgType,Content} = messageObj;
    var CreateTime = new Date().getTime();
    switch(MsgType){
        case 'text':
        var xml = '<xml><ToUserName>'+ToUserName
        +'</ToUserName><FromUserName>'
        +FromUserName+'</FromUserName><CreateTime>'
        +CreateTime+'</CreateTime><MsgType>text</MsgType><Content>'
        +Content+'</Content></xml>';
        console.log('返回文字\n\n\n');
        return xml;
        break;

        // case 'image':
        // var xml = '<xml><ToUserName>'+ToUserName
        // +'</ToUserName><FromUserName>'
        // +FromUserName+'</FromUserName><CreateTime>'
        // +CreateTime+'</CreateTime><MsgType>image</MsgType><Image><MediaId>'
        // +Content+'</MediaId></Image></xml>';
        // console.log('返回图片\n\n\n');
        // return xml;
        // break;

        // case 'voice':
        // var xml = '<xml><ToUserName>'+ToUserName
        // +'</ToUserName><FromUserName>'
        // +FromUserName+'</FromUserName><CreateTime>'
        // +CreateTime+'</CreateTime><MsgType>voice</MsgType><Voice><MediaId>'
        // +Content+'</MediaId></Voice></xml>';
        // console.log('返回语音\n\n\n');
        // return xml;
        // break;
    }
}

module.exports = createxml;