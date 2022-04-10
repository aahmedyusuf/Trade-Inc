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

function CreateCustomer(username, password, name, description, address){

    data = {
        result: ''
    }
    pool.query(`INSERT INTO customer(username, password) VALUES($1, $2)`, [username,password],(err, result) => {
        if(err){
            console.log("Error in inserting to customer database. maybe duplicated...");
            data.result = 404;
            return JSON.stringify(data);
        }else{
            console.log("Sucessfully inserted into customer table");
            pool.query(`INSERT INTO customer_info(username, name, description, address) VALUES($1, $2, $3, $4)`, [username,name, description, address]);
            data.result = 202;
            return JSON.stringify(data);
        }
    })
}
function CreateManufacturer(username, password, name, description, address){
    data = {
        result: ''
    }
    pool.query(`INSERT INTO manufacturer(username, password) VALUES($1, $2)`, [username,password],(err, result) => {
        if(err){
            console.log("Error in inserting to manufacturer database. maybe duplicated...");
            data.result = 404;
            return JSON.stringify(data);
        }else{
            console.log("Sucessfully inserted into manufacturer table");
            pool.query(`INSERT INTO manufacturer_info(username, name, description, address) VALUES($1, $2, $3, $4)`, [username,name, description, address]);
            data.result = 202;
            return JSON.stringify(data);
        }
    })
}
function CreateProduct(manufacturer_username, productName, description, url){
    data = {
        result: ''
    }
    pool.query(`INSERT INTO product(username, name) VALUES($1, $2)`, [manufacturer_username,productName],(err, result) => {
        if(err){
            console.log("Error in inserting to Product table. maybe duplicated...");
            data.result = 404;
            return JSON.stringify(data);
        }else{
            console.log("Sucessfully inserted into Product table");
            pool.query(`INSERT INTO product_info(username, name, description, url) VALUES($1, $2, $3, $4)`, [manufacturer_username,productName, description, url]);
            data.result = 202;
            return JSON.stringify(data);
        }
    })
}
function CreateOrder(username,manufacturer_username, productName, amount){
    data = {
        result: ''
    }
    pool.query(`INSERT INTO user_order(username, m_username, product, amount) VALUES($1, $2, $3, $4)`, [username,manufacturer_username, productName, amount],(err, result) => {
        if(err){
            console.log("Error in inserting to Order table. maybe duplicated...");
            data.result = 404;
            return JSON.stringify(data);
        }else{
            data.result = 202;
            return JSON.stringify(data);
        }
    })
}
function getProducts(){
    data = {
        error: '',
        result: '',
    }

    pool.query('Select * from product,product_info ', (err, result) => {
        if(err){
            console.log("error in getting products");
            data.error = 404;

            return JSON.stringify(data);
        }else{
            console.log("sucessfully got products");

            data.error = 202;
            data.result = result.rows;
            console.log(data);
            return JSON.stringify(data);
        }
    })
}
async function getOrder(username){
    let response;

    data = {
        error: '',
        result: '',
    }
    try{
    response = pool.query('Select * from user_order,product_info Where user_order.m_username = product_info.username AND user_order.product = product_info.name', (err, result) =>{
        if(err){
            data.error = 404;
            
            console.log('Error in getting orders');
            console.log(err);
        }else{
            data.error = 202;
            console.log('Sucesfully got orders');
            data.result = result.rows;
            console.log(data);
        }
    })
}catch{
    console.log("catch error");
}
    return response.rows;
}

module.exports = {Connect, CreateCustomer, CreateManufacturer, CreateProduct, CreateOrder, getProducts, };

