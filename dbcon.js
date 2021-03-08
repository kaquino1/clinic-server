var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'bc31074bb96012',
    password: '03b93899',
    database: 'heroku_ff243c72c79a2c1'
});

module.exports.pool = pool;

// mysql://bc31074bb96012:03b93899@us-cdbr-east-03.cleardb.com/heroku_ff243c72c79a2c1?reconnect=true
