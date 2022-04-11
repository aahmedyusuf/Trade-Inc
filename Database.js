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

async function CreateCustomer(username, password, name, description, address){

    try{
        const response1 = await pool.query(`INSERT INTO customer(username, password) VALUES($1, $2)`, [username,password]);
        const response2 = await pool.query(`INSERT INTO customer_info(username, name, description, address) VALUES($1, $2, $3, $4)`, [username,name, description, address]);
        return response1.rows + response2.rows;
    }catch{

    }
}
async function CreateManufacturer(username, password, name, description, address){
    try{
        const response1 = await pool.query(`INSERT INTO manufacturer(username, password) VALUES($1, $2)`, [username,password]);
        const response2 = await pool.query(`INSERT INTO manufacturer_info(username, name, description, address) VALUES($1, $2, $3, $4)`, [username,name, description, address]);
        return response1.rows + response2.rows;
    }catch{
        return("404");
    }
}
async function CreateProduct(manufacturer_username, productName, description, url){
    try{
        const response1 = await pool.query(`INSERT INTO product(username, name) VALUES($1, $2)`, [manufacturer_username,productName]);
        const response2 = await pool.query(`INSERT INTO product_info(username, name, description, url) VALUES($1, $2, $3, $4)`, [manufacturer_username,productName, description, url]);

        return response1.rows + response2.rows;
    }catch{
        return("404");
    }

}
async function CreateOrder(username,manufacturer_username, productName, amount){
    try{
        const response = await pool.query(`INSERT INTO user_order(username, m_username, product, amount) VALUES($1, $2, $3, $4)`, [username,manufacturer_username, productName, amount]);
        return response;
    }catch{
        return("404");
    }
}
async function getProducts(){
    try {
        const response = await pool.query('Select * from product,product_info');
        return response.rows;
    }catch{
        return("404");
    }
    
}
//fix this
async function getOrder(username){
    
    try {
    const response = await pool.query('Select * from user_order,product_info Where user_order.m_username = product_info.username AND user_order.product = product_info.name');
    //console.log(response.rows);
    return response.rows;
    }catch(err){
        return("404");
    }
}
//console.log(Torder());

module.exports = {Connect, CreateCustomer, CreateManufacturer, CreateProduct, CreateOrder, getProducts, getOrder};

