const Pool= require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"user",
    post:5432,
});

module.exports=pool;

