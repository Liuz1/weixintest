

var mysql = require('mysql');


exports.getopenIDfromDB = function(needToFind){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
       connection.connect();
       console.log('数据库连接成功');
       var sql = 'SELECT openid FROM dataofbisai';
       connection.query(sql,function(err,result){
           if(err){
               console.log('[SELECT ERROR]-',err.message);
               return;
           }

           console.log('---------------------------SELECT---------------------------');
           console.log(result);
           var a  = JSON.parse(JSON.stringify(result,2))
           console.log('------------------------------------------------------------\n');
           var re = findit(a,needToFind);
           console.log(re);
           resolve(re);
       });
       connection.end()
    })
}

function findit(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i].openid == val){
            return arr[i].openid;
        }
    }
    return -1;
}

exports.getcontentFromDB = function(openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var sql = 'SELECT content FROM dataofbisai where openid = ?';
        connection.query(sql,[openID],function(err,result){
            if(err){
                console.log('[SELECT ERROR]-',err.message);
                return;
            }
            console.log('---------------------------SELECT---------------------------');
            console.log(result);
            var a  = JSON.parse(JSON.stringify(result,2))
            console.log(a)
            console.log('------------------------------------------------------------\n');
            if(a==''){
                resolve('')
            }else{
                resolve(a[0].content)
            }
        });
        connection.end();
    })
}

exports.insert_openID = function(openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var addSql = 'INSERT INTO dataofBisai(openid) VALUES(?)';
        var addSqlParams=[openID];
        connection.query(addSql,addSqlParams,function(err,result){
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------INSERT openid----------------------------');
            console.log('INSERT ID:',result);        
            console.log('-----------------------------------------------------------------\n\n');  
            resolve();
        });
        connection.end();
    })
}

exports.insert_sex = function(sex,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var addSex = 'UPDATE dataofbisai SET sex = ? WHERE openid = ?';
        var addSexParams = [sex,openID];
        connection.query(addSex,addSexParams,function(err,result){
            if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------UPDATE----------------------------');
            console.log('UPDATE affectedRows',result.affectedRows);
            console.log('-----------------------------------------------------------------\n\n');
            resolve();
        });
        connection.end();
    })
}

exports.insert_comp = function(comp,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET comp = ? WHERE openid = ?';
        var modSqlParams = [comp,openID];
        connection.query(modSql,modSqlParams,function(err,result){
            if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------UPDATE----------------------------');
            console.log('UPDATE affectedRows',result.affectedRows);
            console.log('-----------------------------------------------------------------\n\n');
            resolve();
        });
        connection.end();
    })
}

exports.insert_number = function(number,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET number = ? WHERE openid = ?';
        var modSqlParams = [number,openID];
        connection.query(modSql,modSqlParams,function(err,result){
            if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------UPDATE----------------------------');
            console.log('UPDATE affectedRows',result.affectedRows);
            console.log('-----------------------------------------------------------------\n\n');
            resolve();
        });
        connection.end();
    })
}

exports.insert_subject = function(subject,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET subject = ? WHERE openid = ?';
        var modSqlParams = [subject,openID];
        connection.query(modSql,modSqlParams,function(err,result){
            if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------UPDATE----------------------------');
            console.log('UPDATE affectedRows',result.affectedRows);
            console.log('-----------------------------------------------------------------\n\n');
            resolve();
        });
        connection.end();
    })
}

exports.insert_content= function(openID,content){

    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET content = ? WHERE openid = ?';
        var modSqlParams = [content,openID];
        //改
        connection.query(modSql,modSqlParams,function (err, result) {
        if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
        }        
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
        resolve();
        });
        
        connection.end();
    })
        
}

exports.insert_name = function(name,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET name = ? WHERE openid = ?';
        var modSqlParams = [name,openID];
        //改
        connection.query(modSql,modSqlParams,function (err, result) {
        if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
        }        
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
        resolve();
        });
        
        connection.end();
    })
}

exports.getcompDB = function(openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var sql = 'SELECT comp FROM dataofbisai where openid = ?';
        connection.query(sql,[openID],function(err,result){
            if(err){
                console.log('[SELECT ERROR]-',err.message);
                return;
            }
            console.log('---------------------------SELECT---------------------------');
            console.log(result);
            var a  = JSON.parse(JSON.stringify(result,2))
            console.log('------------------------------------------------------------\n');
            if(a==''){
                resolve('')
            }else{
                resolve(a[0].connect)
            }
        });
        connection.end();
    })
}

exports.insert_partner = function(name,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET partnername = ? WHERE openid = ?';
        var modSqlParams = [name,openID];
        //改
        connection.query(modSql,modSqlParams,function (err, result) {
        if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
        }        
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
        resolve();
        });
        
        connection.end();
    })
}

exports.insert_phone = function(phone,openID){
    return new Promise(function(resolve,reject){
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'weixintest',
        
        });
        connection.connect();
        console.log('数据库连接成功');
        var modSql = 'UPDATE dataofbisai SET phone = ? WHERE openid = ?';
        var modSqlParams = [phone,openID];
        //改
        connection.query(modSql,modSqlParams,function (err, result) {
        if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
        }        
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result.affectedRows);
        console.log('-----------------------------------------------------------------\n\n');
        resolve();
        });
        
        connection.end();
    })
}