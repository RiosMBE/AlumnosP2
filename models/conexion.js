const mysql = require('mysql2');
var sqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sistemas"
});
sqlConnection.connect(function(err){
    if(err){
        console.log(err.message)
    }else{
    console.log("Conexion exitosa");
    }
});
module.exports=sqlConnection;