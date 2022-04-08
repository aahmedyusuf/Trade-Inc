const Pool = require("pg").Pool;
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

function Connect(){
    pool.connect(function(err, result){

        if(err){
            console.log("Error Connecting to the database");
        }else{
            console.log("Sucessfully connected to the database");
        }
    })
}

function getCustomers(){
    pool.query('Select * from customer', (err,result) => {

        console.log(result.rows);

        pool.end();
    })
}


module.exports = { getCustomers,  Connect};

